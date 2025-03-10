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

  it('debería aplicar un descuento del 15% para un precio total de 30000', () => {
    const orden = new Orden(600, 50); 
    expect(orden.aplicarDescuento(30000)).toEqual(4500); 
  });
});

// Prueba para aplicar impuestos basados en el estado

describe('Impuestos por Estado', () => {
  it('debería calcular el impuesto correctamente para el estado CA (8.25%)', () => {
    const orden = new Orden(10, 10); 
    const precioNeto = 100; 
    const estado = 'CA'; 

    const impuesto = orden.calcularImpuesto(precioNeto, estado);

    expect(impuesto).toBeCloseTo(8.25, 2); 
  });

  it('debería calcular el impuesto correctamente para el estado AL (4.00%)', () => {
    const orden = new Orden(10, 10); 
    const precioNeto = 100; 
    const estado = 'AL'; 

    const impuesto = orden.calcularImpuesto(precioNeto, estado);

    expect(impuesto).toBeCloseTo(4.00, 2); 
  });

  it('debería calcular el impuesto correctamente para el estado TX (6.25%)', () => {
    const orden = new Orden(10, 10); 
    const precioNeto = 100; 
    const estado = 'TX'; 

    const impuesto = orden.calcularImpuesto(precioNeto, estado);

    expect(impuesto).toBeCloseTo(6.25, 2); 
  });

  it('debería calcular el impuesto correctamente para el estado NV (8.00%)', () => {
    const orden = new Orden(30, 10); 
    const precioNeto = 300; 
    const estado = 'NV'; 

    const impuesto = orden.calcularImpuesto(precioNeto, estado);

    expect(impuesto).toBeCloseTo(24.00, 2); 
  });

  it('debería calcular el impuesto correctamente para el estado UT (6.65%)', () => {
    const orden = new Orden(50, 10); 
    const precioNeto = 500; 
    const estado = 'UT'; 

    const impuesto = orden.calcularImpuesto(precioNeto, estado);

    expect(impuesto).toBeCloseTo(33.25, 2); 
  });
});

// Prueba para aplicar impuesto adicional

describe('calcularImpuestoAdicional', () => {
  
  it('debería no aplicar impuesto adicional para la categoría "Varios"', () => {
    const orden = new Orden(20, 50); 
    expect(orden.calcularImpuestoAdicional(150, 'Varios')).toEqual(0);
  });


  it('debería no aplicar impuesto adicional para la categoría "Alimentos"', () => {
    const orden = new Orden(10, 50); 
    expect(orden.calcularImpuestoAdicional(200, 'Alimentos')).toEqual(0); 
  });

  it('debería aplicar 7% de impuesto adicional para la categoría "Bebidas alcohólicas"', () => {
    const orden = new Orden(20, 50); 
    expect(orden.calcularImpuestoAdicional(100, 'Bebidas alcohólicas')).toEqual(7); 
  });

  it('debería no aplicar impuesto adicional para la categoría "Material de escritorio"', () => {
    const orden = new Orden(20, 50); 
    expect(orden.calcularImpuestoAdicional(300, 'Material de escritorio')).toEqual(0); 
  });

  it('debería aplicar 3% de impuesto adicional para la categoría "Muebles"', () => {
    const orden = new Orden(20, 50); 
    expect(orden.calcularImpuestoAdicional(200, 'Muebles')).toEqual(6); 
  });
  
  it('debería aplicar 4% de impuesto adicional para la categoría "Electrónicos"', () => {
    const orden = new Orden(20, 50); 
    expect(orden.calcularImpuestoAdicional(150, 'Electrónicos')).toEqual(6); 
  });

  it('debería aplicar 2% de impuesto adicional para la categoría "Vestimenta"', () => {
    const orden = new Orden(20, 50); 
    expect(orden.calcularImpuestoAdicional(400, 'Vestimenta')).toEqual(8); 
  });
});

// Prueba para aplicar el descuento adicional

describe('calcularDescuentoAdicional', () => {
  it('no debe aplicar descuento adicional para la categoría "Varios"', () => {
    const orden = new Orden(5, 100);
    const precioNeto = orden.calcularPrecioNeto();
    const descuentoAdicional = orden.calcularDescuentoAdicional(precioNeto, 'Varios');
    expect(descuentoAdicional).toBe(0); // No hay descuento adicional para "Varios"
  });

 

});


