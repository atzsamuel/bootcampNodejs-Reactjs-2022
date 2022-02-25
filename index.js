// como ejercicio agregar el focus en el primer input
const form = document.getElementsByTagName("form")[0];

/** @type {HTMLInputElement} */
const inputCodigo = document.getElementById("codigo");
/** @type {HTMLInputElement} */
const inputNombre = document.getElementById("nombre");
/** @type {HTMLInputElement} */
const inputCantidad = document.getElementById("cantidad");
/** @type {HTMLInputElement} */
const inputPrecio = document.getElementById("precio");
/** @type {HTMLInputElement} */
const selectCategoria = document.getElementById("categoria");

const tbody = document.getElementsByTagName("tbody")[0];
const cantidadTotalElement = document.getElementById("cantidad-total");
const precioTotalElement = document.getElementById("precio-total");
const granTotalElement = document.getElementById("gran-total");

let indice = 0;
let cantidadTotal = 0;
let preciosTotales = 0;
let granTotal = 0;
let currentRow;

form.addEventListener("submit", onsubmit);

// Esto es para moestrar veventos especificamente de Event
/**
 *
 * @param {Event} event
 */
function onsubmit(event) {
  event.preventDefault();

  const data = new FormData(form);
  const values = Array.from(data.entries());

  const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria] = values;

  let codigo = frmCodigo[1];
  const nombre = frmNombre[1];
  const cantidad = frmCantidad[1];
  const precio = frmPrecio[1];
  const categoria = frmCategoria[1];
  const total = precio * cantidad;

  cantidadTotal = parseFloat(cantidad) + cantidadTotal;
  preciosTotales = parseFloat(precio) + preciosTotales;
  granTotal = parseFloat(total) + granTotal;

  let tr;
  if (!codigo) {
    indice++;
    codigo = indice;
    tr = document.createElement("tr");
    tbody.appendChild(tr);
  } else {
    tr = currentRow;
  }

  console.log(cantidadTotal);
  console.log(preciosTotales);
  console.log(granTotal);

  tr.dataset.categoria = categoria;
  tr.innerHTML = `
    <td>${indice}</td>
    <td>${nombre}</td>
    <td>${cantidad}</td>
    <td>${precio}</td>
    <td>${total}</td>
    <td><a href="#" onclick="onEdit(event)">Editar</a> | <a href="#" onclick="onDelete(event)">Eliminar</a></td>
    `;

  cantidadTotalElement.innerHTML = cantidadTotal;
  precioTotalElement.innerHTML = preciosTotales;
  granTotalElement.innerHTML = granTotal;

  form.reset();
}

/**
 *
 * @param {Event} event
 */
function onEdit(event) {
  event.preventDefault();

  /** @type {HTMLAnchorElement} */
  const anchor = event.target;
  const tr = anchor.parentElement.parentElement;
  const celdas = tr.getElementsByTagName("td");
  const [tdCodigo, tdNombre, tdCantidad, tdPrecio] = celdas;

  inputCodigo.value = tdCodigo.innerText;
  inputNombre.value = tdNombre.innerText;
  inputCantidad.value = tdCantidad.innerText;
  inputPrecio.value = tdPrecio.innerText;
  selectCategoria.value = tr.dataset.categoria;

  currentRow = tr;
}

/**
 *
 * @param {Event} event
 */
function onDelete(event) {
  event.preventDefault();
  /** @type {HTMLAnchorElement} */
  const anchor = event.target;
  const tr = anchor.parentElement.parentElement;
  tbody.removeChild(tr);
}
