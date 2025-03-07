import { Orden } from './orden.js';

// Metodo para calcular el precio neto

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
  document.getElementById('resultado').innerText = `Precio neto: $${precioNeto.toFixed(2)}`;
});