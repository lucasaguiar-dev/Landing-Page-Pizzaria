import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero/index.js";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import { productData } from "./components/Products/data";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Products heading="Escolha a sua favorita" data={productData} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
