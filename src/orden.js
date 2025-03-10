export class Orden {
  constructor(cantidad, precioPorItem) {
    this.cantidad = cantidad;
    this.precioPorItem = precioPorItem;
  }

  calcularPrecioNeto() {
    return this.cantidad * this.precioPorItem;
  }

  aplicarDescuento(precioTotal) {
    const descuentos = [
      { limite: 999, porcentaje: 0 },
      { limite: 2999, porcentaje: 0.03 },
      { limite: 6999, porcentaje: 0.05 },
      { limite: 9999, porcentaje: 0.07},
      { limite: 29999, porcentaje: 0.10},
      { limite: Infinity, porcentaje: 0.15}
    ];

    const descuento = descuentos.find(d => precioTotal <= d.limite).porcentaje;
    return Math.round(precioTotal * descuento * 100) / 100; // Redondeo a 2 decimales
  }

  calcularImpuesto(precioNeto, estado) {
    const tasasImpuestos = {
      'CA': 0.0825, 
      'AL': 0.04,
      'TX': 0.0625,
      'NV': 0.08,
      'UT': 0.0665
    };

    if (estado in tasasImpuestos) {
      const tasaImpuesto = tasasImpuestos[estado];
      return precioNeto * tasaImpuesto;
    } else {
      throw new Error(`Estado no válido: ${estado}`);
    }
  }

  calcularImpuestoAdicional(precioNeto, categoria) {
    const impuestosAdicionales = {
      'Varios': 0,
      'Alimentos': 0,
      'Bebidas alcohólicas': 0.07,
      'Material de escritorio': 0,
      'Muebles': 0.03,
      'Electrónicos': 0.04,
      'Vestimenta': 0.02
    }
  
    const tasaImpuestoAdicional = impuestosAdicionales[categoria] || 0;
    return Math.round(precioNeto * tasaImpuestoAdicional * 100) / 100; // Redondeo a 2 decimales
  }

  calcularDescuentoAdicional(precioNeto, categoria) {
    const descuentosAdicionales = {
      'Varios': 0,


    };
  
    const tasaDescuentoAdicional = descuentosAdicionales[categoria] || 0;
    return Math.round(precioNeto * tasaDescuentoAdicional * 100) / 100; // Redondeo a 2 decimales
  }


}