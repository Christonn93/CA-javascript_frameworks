// Importing react
import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing MUI
import { ThemeProvider } from "@mui/material";

// Importing base layout
import Layout from "./layout/BaseLayout";

// Importing pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Privacy from "./pages/Privacy/Privacy";
import NotFound from "./pages/404/404";

// Importing cart provider
import CartProvider from "./context/cartContext";

// Importing Theme
import { ColorModeContext, useMode } from "../src/layout/Theme";

function App() {
 const [theme, colorMode] = useMode();

 return (
  <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <CartProvider>
      <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
       </Route>
      </Routes>
     </CartProvider>
    </ThemeProvider>
   </ColorModeContext.Provider>
  </>
 );
}

export default App;
