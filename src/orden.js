export class Orden {
  constructor(cantidad, precioPorItem) {
    this.cantidad = cantidad;
    this.precioPorItem = precioPorItem;
  }

  calcularPrecioNeto() {
    return this.cantidad * this.precioPorItem;
  }

  aplicarDescuento(precioTotal) {
    if (precioTotal >= 10000) return precioTotal * 0.10;
    if (precioTotal >= 7000) return precioTotal * 0.07;
    if (precioTotal >= 3000) return precioTotal * 0.05;
    if (precioTotal >= 1000) return precioTotal * 0.03;
    return 0;
  }
}