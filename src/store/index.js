import { applyMiddleware, createStore } from "redux";
import * as storage from "./store";

const preloadState = {
  producto: {},
  productos: [],
};

const middlewares = applyMiddleware(
  storage.loggerMidelware,
  storage.agregarOModificarProductoMiddleware,
  storage.generadorCodigoProductoBuilder(100)
);

const store = createStore(storage.reducer, preloadState, middlewares);

export default store;
