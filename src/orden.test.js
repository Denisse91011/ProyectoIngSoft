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
  

  it('debería aplicar un descuento del 5% para un precio total de 3000', () => {
    const orden = new Orden(60, 50); 
      expect(orden.aplicarDescuento(3000)).toEqual(150); 
  });

  

  it('debería aplicar un descuento del 7% para un precio total de 7000', () => {
    const orden = new Orden(140, 50); 
    expect(orden.aplicarDescuento(7000)).toBeCloseTo(490, 2);
  });

  

  it('debería aplicar un descuento del 10% para un precio total de 10000', () => {
    const orden = new Orden(200, 50); 
    expect(orden.aplicarDescuento(10000)).toEqual(1000); 
  });
/*
  

  it('debería aplicar un descuento del 15% para un precio total de 30000', () => {
    const orden = new Orden(600, 50); 
    expect(orden.aplicarDescuento(30000)).toEqual(4500); 
  });
  
*/
});


