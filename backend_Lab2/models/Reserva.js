const mongoose = require('mongoose');

// Define el esquema de una reserva
const reservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  sala: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], // Solo acepta letras A–J
    required: true
  },
  hora: {
    type: String,
    required: true
  }
});

// Exporta el modelo Reserva
module.exports = mongoose.model('Reserva', reservaSchema);
