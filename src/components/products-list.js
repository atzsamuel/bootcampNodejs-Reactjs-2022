import React from "react";
const ProductItem = (prop) => {
  const item = prop.item;
  const acciones = prop.acciones;
  return (
    <tr>
      <td>{item.codigo}</td>
      <td>{item.nombre}</td>
      <td>{item.cantidad}</td>
      <td>{item.precio}</td>
      <td>{item.total}</td>
      <td>
        <div className="btn-group">
          <a
            title="Editar"
            href="#"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => acciones.seleccionar(item.codigo)}
          >
            <i className="bi bi-pencil-square"></i>
          </a>
          <a
            title="Eliminar"
            href="#"
            className="btn btn-sm btn-outline-danger"
            onClick={() => acciones.eliminar(item.codigo)}
          >
            <i className="bi bi-trash"></i>
          </a>
        </div>
      </td>
    </tr>
  );
};

const ProductsList = () => {
  const productos = [
    {
      codigo: 1,
      nombre: "Producto A",
      cantidad: 10,
      precio: 100,
      total: 1000,
    },
    {
      codigo: 2,
      nombre: "Producto B",
      cantidad: 20,
      precio: 200,
      total: 2000,
    },
  ];

  const seleccionar = (codigo) => {
    console.log("selec" + codigo);
  };

  const eliminar = (codigo) => {
    console.log("dele" + codigo);
  };

  const acciones = {
    seleccionar,
    eliminar,
  };

  const cantidadTotal = sum(productos, (x) => x.cantidad);
  const precioTotal = sum(productos, (x) => x.precio);
  const granTotal = sum(productos, (x) => x.total);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productos.map((item) => (
          <ProductItem key={item.codigo} item={item} acciones={acciones} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Totales</td>
          <td id="cantidad-total">{cantidadTotal}</td>
          <td id="precio-total">{precioTotal}</td>
          <td id="gran-total">{granTotal}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

function sum(elementos, selector) {
  return elementos.map(selector).reduce((a, b) => a + b, 0);
}

export default ProductsList;
