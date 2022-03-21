export const ui = {
  onFormSubmit: (data) => {},
  onEliminarClick: (codigo) => {},
  onEditarClick: (codigo) => {},
  sum: (elementos, selector) => {},
  renderForm,
  renderTable,
};

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const values = Array.from(data.entries());

  const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria] = values;

  const codigo = parseInt(frmCodigo[1]);
  const nombre = frmNombre[1];
  const cantidad = parseInt(frmCantidad[1]);
  const precio = parseFloat(frmPrecio[1]);
  const categoria = frmCategoria[1];
  ui.onFormSubmit({
    codigo,
    nombre,
    cantidad,
    precio,
    categoria,
  });
});

function renderForm(producto) {
  inputCodigo.value = producto.codigo || "";
  inputNombre.value = producto.nombre || "";
  inputCantidad.value = producto.cantidad || "";
  inputPrecio.value = producto.precio || "";
  selectCategoria.value = producto.categoria || 1;
}

function renderTable(productos) {
  const filas = productos.map((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
 <td>${item.codigo}</td>
 <td>${item.nombre}</td>
 <td>${item.cantidad}</td>
 <td>${item.precio}</td>
 <td>${item.total}</td>
 <td>
   <div class="btn-group">
     <a title="Editar" href="#" class="btn btn-sm btn-outline-secondary">
       <i class="bi bi-pencil-square"></i>
     </a> |
     <a title="Eliminar" href="#" class="btn btn-sm btn-outline-danger">
       <i class="bi bi-trash"></i>
     </a>
   </div>
  </td>
 `;
    const [editar, eliminar] = tr.getElementsByTagName("a");

    eliminar.addEventListener("click", (event) => {
      event.preventDefault();
      ui.onEliminarClick(item.codigo);
    });

    editar.addEventListener("click", (event) => {
      event.preventDefault();
      ui.onEditarClick(item.codigo);
    });

    return tr;
  });

  tbody.innerHTML = "";
  filas.forEach((tr) => {
    tbody.appendChild(tr);
  });

  // const precioTotal = productos.map((x) => x.precio).reduce((a, b) => a + b, 0);
  // const granTotal = productos.map((x) => x.total).reduce((a, b) => a + b, 0);

  cantidadTotalElement.innerHTML = sum(productos, (x) => x.cantidad);
  precioTotalElement.innerHTML = sum(productos, (x) => x.precio);
  granTotalElement.innerHTML = sum(productos, (x) => x.total);

  function sum(elementos, selector) {
    return elementos.map(selector).reduce((a, b) => a + b, 0);
  }
}
