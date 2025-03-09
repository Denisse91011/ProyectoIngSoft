import { Orden } from './orden.js';

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener valores del formulario
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const estado = document.getElementById('estado').value;
  const categoria = document.getElementById('categoria').value;

  // Validar entradas
  if (isNaN(cantidad) || cantidad <= 0) {
    alert('La cantidad debe ser un número positivo.');
    return;
  }
  if (isNaN(precio) || precio <= 0) {
    alert('El precio debe ser un número positivo.');
    return;
  }

  // Crear la orden y calcular valores
  const orden = new Orden(cantidad, precio);
  const precioNeto = orden.calcularPrecioNeto();
  const descuento = orden.aplicarDescuento(precioNeto);
  const precioConDescuento = precioNeto - descuento;
  const impuesto = orden.calcularImpuesto(precioConDescuento, estado);

  // Cálculo del impuesto adicional basado en la categoría
  const impuestoAdicional = orden.calcularImpuestoAdicional(precioConDescuento, categoria);

  // Calcular el precio total
  const precioTotal = precioConDescuento + impuesto + impuestoAdicional;

  // Mostrar el resultado al usuario
  document.getElementById('resultado').innerHTML = `
    <h3>Detalle del cálculo:</h3>
    <p>Precio neto (${cantidad} × $${precio.toFixed(2)}): <strong>$${precioNeto.toFixed(2)}</strong></p>
    <p>Descuento por volumen: <strong>$${descuento.toFixed(2)}</strong></p>
    <p>Precio con descuento: <strong>$${precioConDescuento.toFixed(2)}</strong></p>
    <hr>
    <p>Impuesto (${estado}): <strong>$${impuesto.toFixed(2)}</strong></p>
    <p>Impuesto adicional (${categoria}): <strong>$${impuestoAdicional.toFixed(2)}</strong></p>
    <h2>Total a pagar: <strong>$${precioTotal.toFixed(2)}</strong></h2>
  `;
});