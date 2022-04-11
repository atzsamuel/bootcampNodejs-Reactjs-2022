import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productoEliminado, productoSeleccionado } from "../store/store";

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
  const productos = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  const seleccionar = (codigo) => {
    dispatch(productoSeleccionado(codigo));
  };

  const eliminar = (codigo) => {
    dispatch(productoEliminado(codigo));
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
