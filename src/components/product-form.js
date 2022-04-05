import React from "react";
const ProductForm = () => {
  return <form action="index.html">
      <input type="hidden" name="codigo" id="codigo" />
      <div>
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input type="text" name="nombre" id="nombre" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="cantidad" className="form-label">
          Cantidad
        </label>
        <input
          type="number"
          name="cantidad"
          id="cantidad"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="precio" className="form-label">
          Precio
        </label>
        <div className="input-group-text">
          <span className="input-group-text">Q</span>
          <input
            type="number"
            name="precio"
            id="precio"
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="categoria" className="form-label">
          Categoria
        </label>
        <select name="categoria" id="categoria" className="form-control">
          <option value="1">Laptops</option>
          <option value="2">Tablets</option>
          <option value="3">Celulares</option>
          <option value="4">Categoria 4</option>
        </select>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
};
export default ProductForm;
