import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import ProductForm from "./components/product-form";
import ProductsList from "./components/products-list";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/nuevo">
            <ProductForm />
          </Route>
          <Route path="/editar/:codigo">
            <ProductForm />
          </Route>
          <Route path="/">
          <Link to="/nuevo">Nuevo</Link>
            <ProductsList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
