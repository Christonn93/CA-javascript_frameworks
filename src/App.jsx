// Importing react
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing sass
import "./style/index.scss";

// Importing base layout
import Layout from "./layouts/BaseLayout";

// Importing pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Product from "./pages/products/Product";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import NotFound from "./pages/404/404";

// Importing cart provider
import { CartProvider } from "./components/cart/cartContext";

function App() {
 return (
  <CartProvider>
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="product/:id" element={<Product />} />
     <Route path="product" element={<Product />} />
     <Route path="cart" element={<Cart />} />
     <Route path="checkout" element={<Checkout />} />
     <Route path="contact" element={<Contact />} />
     <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
  </CartProvider>
 );
}

export default App;
