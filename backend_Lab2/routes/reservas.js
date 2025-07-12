const express = require('express');
const Reserva = require('../models/Reserva');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Middleware que protege todas las rutas
router.use(authMiddleware);

// Función para validar hora 12h con AM/PM (espacio obligatorio)
function validarHora12(horaString) {
  const regexHora12 = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s(AM|PM)$/;
  return regexHora12.test(horaString);
}

// Función para convertir hora 12h a 24h
function convertirA24Horas(hora12) {
  const [time, meridiem] = hora12.split(' ');
  let [horas, minutos] = time.split(':').map(Number);

  if (meridiem === 'PM' && horas !== 12) {
    horas += 12;
  }
  if (meridiem === 'AM' && horas === 12) {
    horas = 0;
  }
  return { horas, minutos };
}

// Ruta para listar reservas del usuario autenticado
router.get('/', async (req, res) => {
  const reservas = await Reserva.find({ usuario: req.userId });
  res.json(reservas);
});

// Ruta para crear reserva con validaciones
router.post('/', async (req, res) => {
  const { fecha, sala, hora } = req.body;

  if (!hora) {
    return res.status(400).json({ error: 'La hora es requerida.' });
  }

  // Normalizar hora: mayúsculas y espacio simple
  let horaString = String(hora).toUpperCase().replace(/\s+/g, ' ').trim();

  console.log('Hora recibida:', `"${horaString}"`);

  // Validar formato hora 12h con AM/PM
  if (!validarHora12(horaString)) {
    return res.status(400).json({
      error: 'Formato de hora no válido. Debe ser formato 12 horas con AM/PM, ejemplo: "03:30 PM".'
    });
  }

  // Validar fecha válida y no domingo
  const fechaObj = new Date(fecha);
  if (isNaN(fechaObj.getTime())) {
    return res.status(400).json({ error: 'Fecha no válida.' });
  }
  if (fechaObj.getUTCDay() === 0) {
    return res.status(400).json({ error: 'No se permiten reservas los domingos.' });
  }

  // Convertir a 24h para validar rango
  const { horas, minutos } = convertirA24Horas(horaString);
  const totalMinutos = horas * 60 + minutos;
  const inicio = 8 * 60;  // 08:00 AM
  const fin = 22 * 60;    // 10:00 PM

  if (totalMinutos < inicio || totalMinutos > fin) {
    return res.status(400).json({
      error: 'La hora debe estar entre 08:00 AM y 10:00 PM.'
    });
  }

  // Guardar reserva
  const nueva = new Reserva({
    usuario: req.userId,
    fecha,
    sala,
    hora: horaString
  });

  await nueva.save();
  res.status(201).json(nueva);
});

// Ruta para eliminar reserva (solo propia)
router.delete('/:id', async (req, res) => {
  await Reserva.deleteOne({ _id: req.params.id, usuario: req.userId });
  res.json({ msg: 'Reserva cancelada' });
});

module.exports = router;
