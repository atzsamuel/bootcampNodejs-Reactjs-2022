import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

test();

async function test(){
try {
  console.log('antes de fetch')
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  const productos=response.data;
  console.log('Productos:',productos);
  console.log('despues de fetch',productos)
} catch (error) {
 console.error('error en el request',error);
}
}
