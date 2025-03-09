import { Orden } from './orden.js';

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const estado = document.getElementById('estado').value;

  if (isNaN(cantidad) || cantidad <= 0) {
    alert('La cantidad debe ser un número positivo.');
    return;
  }
  if (isNaN(precio) || precio <= 0) {
    alert('El precio debe ser un número positivo.');
    return;
  }

  const orden = new Orden(cantidad, precio);
  const precioNeto = orden.calcularPrecioNeto();
  const descuento = orden.aplicarDescuento(precioNeto);
  const precioConDescuento = precioNeto - descuento;
  const impuesto = orden.calcularImpuesto(precioConDescuento, estado);
  const precioTotal = precioConDescuento + impuesto;

  // Muestra el resultado al usuario
  document.getElementById('resultado').innerHTML = `
    Precio neto: $${precioNeto.toFixed(2)}<br>
    Descuento: $${descuento.toFixed(2)}<br>
    Precio con descuento: $${precioConDescuento.toFixed(2)}
     Impuesto (${estado}): $${impuesto.toFixed(2)}<br>
    <strong>Precio total: $${precioTotal.toFixed(2)}</strong>
  `;
});