import { applyMiddleware, createStore } from "redux";
import apiMiddleware from "./api-redux";
import * as storage from "./store";

//const saveState = JSON.parse(sessionStorage.getItem("state")||"{}");
/*const savedState = localStorage.getItem("state");
const deserialized = savedState && JSON.parse(savedState);*/

const preloadState = {
  producto: {},
  productos: [],
};

const middlewares = applyMiddleware(
  storage.loggerMidelware,
  apiMiddleware,
  storage.agregarOModificarProductoMiddleware,
  //storage.generadorCodigoProductoBuilder(100),
  //storage.storageMiddleware
);

const store = createStore(storage.reducer, preloadState, middlewares);

export default store;
