import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProductDetails from "./components/eachProductDetails";
import ShareProduct from "./components/shareProduct";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-details" element={<ProductDetails />} />
        <Route exact path="/share-product-details" element={<ShareProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
