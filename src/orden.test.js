import { Orden } from './orden.js';

// Prueba para calcular el precio neto

describe('Clase Orden', () => {
  describe('calcularPrecioNeto', () => {
    it('debería calcular el precio neto correctamente', () => {
      const orden = new Orden(20, 3);
      expect(orden.calcularPrecioNeto()).toEqual(60); 
    });
  });
});

// Prueba para aplicar el descuento basado en el precio total

describe('aplicarDescuento', () => {
  it('debería aplicar un descuento del 3% para un precio total de 1000', () => {
    const orden = new Orden(20, 50); 
    expect(orden.aplicarDescuento(1000)).toEqual(30); 
  });
});


