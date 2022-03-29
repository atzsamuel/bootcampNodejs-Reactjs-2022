//import "./js/app";
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const container = document.getElementById("root");
const App = () => (
  <div className="app">
    <h1>hola react!</h1>
  </div>
);

ReactDom.render(<App />, container);
