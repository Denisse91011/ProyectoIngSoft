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
      { limite: 6999, porcentaje: 0.05 }
    ];

    const descuento = descuentos.find(d => precioTotal <= d.limite).porcentaje;
    return Math.round(precioTotal * descuento * 100) / 100; // Redondeo a 2 decimales
  }
}