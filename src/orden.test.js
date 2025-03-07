import { Orden } from './orden.js';

describe('Clase Orden', () => {
  describe('calcularPrecioNeto', () => {
    it('debería calcular el precio neto correctamente', () => {
      const orden = new Orden(20, 3);
      expect(orden.calcularPrecioNeto()).toEqual(60); 
    });
  });
});

