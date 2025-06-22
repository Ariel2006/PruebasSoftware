import e from 'express';
import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  //Arrange
  let calculator: Calculator;
  beforeEach(() => {
     calculator = new Calculator();
  });
  describe('Test for Multiply', ()=>{
    it('should return nine', () => {
      
      //Act
      let result = calculator.multiply(3, 3);
      //Assert
      expect(result).toEqual(9);
  });
  it('should return four', () => {
           //Act
      let result = calculator.multiply(2, 2);
      //Assert
      expect(result).toEqual(4);
  });
  })
  describe('Test for Divide', ()=>{
    it('Divide for a number', () => {
      
      //Act & Assert
      expect(calculator.divide(6, 2)).toEqual(3);
      expect(calculator.divide(5,2)).toEqual(2.5);
      
  });
  it('divide by zero', () => {
      
      //Act & Assert
      expect(calculator.divide(6, 0)).toBe(null);
      expect(calculator.divide(5,0)).toBe(null);
      expect(calculator.divide(54654654654654465465464646544544655465465465444685465456,0)).toBe(null);
      
  });
  })
  describe('Matchers Jasmin', ()=>{
    it('Test of matchers', () => {
     let name= 'Juan';
     let name2= undefined;
     expect(name).toBeDefined();
     expect(name2).toBeUndefined();
     expect(1+2==3).toBeTruthy();
      expect(1+2==4).toBeFalsy();
      expect(1+2).toBeGreaterThan(2);
      expect(1+2).toBeLessThan(5);
      expect('1234567').toMatch(/123/);
      expect(["apples", "oranges", "pears"]).toContain("pears");
  });
  })
});
