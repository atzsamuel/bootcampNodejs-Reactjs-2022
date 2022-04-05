import React from "react";
import './app.css';
import ProductForm from "./components/product-form";
import ProductsList from "./components/products-list";

const App = () => {
  return (
    <main>
      <ProductForm />
      <ProductsList />
    </main>
  );
};

export default App;
