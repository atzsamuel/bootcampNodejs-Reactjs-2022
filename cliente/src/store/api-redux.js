import api from "./api";

const asignarProductos = (payload)=>{
  type:"asignar-productos",
  payload
}

const apiMiddleware = ({dispatch}) => (next) => async (action) => {
  //switch (action) {
    switch (action.type) {
    case "obtener-productos": {
      const productos = await api.all();
      //store.dispatch(asignarProductos(productos));
      dispatch(asignarProductos(productos));
      break;
    }
    case "producto-agregado": {
      await api.add(action.payload);
      const productos = await api.all();
      dispatch(asignarProductos(productos));
     // window.location.href = "/";
      break;
    }
    case "producto-modificado": {
      await api.update(action.payload);
      const productos = await api.all();
      dispatch(asignarProductos(productos));
      //window.location.href = "/";
      break;
    }
    case "producto-eliminado": {
      await api.remove(action.payload.codigo);
      const productos = await api.all();
      dispatch(asignarProductos(productos));
      break;
    }
    case "producto-seleccionado": {
      const {codigo} = action.payload;
      if(codigo){
        const producto = await api.single(codigo);
        next({ type: action.type, payload: producto});
      }else{
        next({ type: action.type, payload: {}});
      }
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
