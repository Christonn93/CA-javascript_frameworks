// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { CardActions, Card, CardContent, Typography } from "@mui/material";

// Importing cart context
import { CartContext } from "../../context/cartContext";

// Functions to be used in the card display
import AddedToCart from "../../utils/ProductCard/AddedToCart";
import AddToCart from "../../utils/ProductCard/AddToCart";
import SaleItem from "../../utils/ProductCard/SaleItem";
import NonSaleItem from "../../utils/ProductCard/NoSaleItem";
import Discount from "../../utils/ProductCard/Discount";
import NoDiscount from "../../utils/ProductCard/NoDiscount";

// Adding some custom style to elements

const linkStyle = {
 textDecoration: "none",
 color: "black",
};

/**
 * ProductCard
 *
 * @param {*} { product }
 * @returns UI for product card
 */
const ProductCard = ({ product }) => {
 // Setting up the cart function's
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(product.id);
 return (
  <Card
   sx={{
    maxWidth: 300,
    overflow: "visible",
    textAlign: "start",
    backgroundColor: "whitesmoke"
   }}
   key={product.id}
  >
   <Link to={`/product/${product.id}`} style={linkStyle}>
    {product.discountedPrice < product.price ? <SaleItem product={product} /> : <NonSaleItem product={product} />}
    <CardContent>
     <Typography gutterBottom variant="h4" component="div">
      {product.title}
     </Typography>
     {product.discountedPrice < product.price ? <Discount product={product} /> : <NoDiscount product={product} />}
    </CardContent>
   </Link>
   <CardActions>{productAmount > 0 ? <AddedToCart product={product} productAmount={productAmount} cart={cart} /> : <AddToCart product={product} cart={cart} />}</CardActions>
  </Card>
 );
};

export default ProductCard;
