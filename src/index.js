import { Orden } from './orden.js';

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);

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

  // Muestra el resultado al usuario
  document.getElementById('resultado').innerHTML = `
    Precio neto: $${precioNeto.toFixed(2)}<br>
    Descuento: $${descuento.toFixed(2)}<br>
    Precio con descuento: $${precioConDescuento.toFixed(2)}
  `;
});