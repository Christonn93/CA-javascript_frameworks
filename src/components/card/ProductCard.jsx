// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { CardActions, Card, CardContent, Typography, Button, Tooltip, Badge, Chip, Box } from "@mui/material";

// Importing cart context
import { CartContext } from "../../context/cartContext";
import { useLocalStorage } from "../../js/localStorage/useLocalStorage";

// Adding some custom style to elements

const linkStyle = {
 textDecoration: "none",
 color: "black",
};

const red = {
 color: "red",
};

const ItemImage = styled.div`
 height: 200px;
 border-radius: 0;
 position: relative;
 margin-bottom: 15px;

 img {
  width: 100%;
  height: 100%;
 }
`;

const Sale = styled.span`
 position: absolute;
 background-color: red;
 top: -0.5rem;
 left: -0.5rem;
 filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
 font-size: 18px;
 text-align: center;
 border-radius: 5px;
`;

// Functions to be used in the card display

/**
 * Calculating out % difference on product price
 *
 * @param {*} product
 * @returns The % difference between two numbers
 */
const priceDiscount = (product) => {
 // Calculating discount price
 const fullPrice = product.price;
 const reducedPrice = product.discountedPrice;
 const discountPercentage = Math.trunc(100 * Math.abs((fullPrice - reducedPrice) / ((fullPrice + reducedPrice) / 2)));

 return discountPercentage;
};

/**
 * SaleItem
 *
 * @param {*} { product }
 * @returns UI if product is on sale
 */
const SaleItem = ({ product }) => {
 const priceOff = priceDiscount(product);
 return (
  <ItemImage>
   <Sale>
    <Chip
     label={"SALE " + priceOff + "% off"}
     size="small"
     sx={{
      color: "white",
      fontSize: "18px",
      filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2))",
     }}
    />
   </Sale>
   <img src={product.imageUrl} alt={product.title} loading={"lazy"} />
  </ItemImage>
 );
};

/**
 * Not sale Item
 *
 * @param {*} { product }
 * @returns UI if product is not on sale
 */
const NonSaleItem = ({ product }) => (
 <ItemImage>
  <img src={product.imageUrl} alt={product.title} loading={"lazy"} />
 </ItemImage>
);

/**
 * Discount
 *
 * @param {*} { product }
 * @returns Discount UI if product is on sale
 */
const Discount = ({ product }) => (
 <>
  <Box>
   <strong>{product.discountedPrice} NOK</strong> <del style={red}>{product.price} NOK</del>
  </Box>
  <Box>
   <small>
    <i>(Additional tax may apply on checkout)</i>
   </small>
  </Box>
 </>
);

/**
 * NoDiscount
 *
 * @param {*} { product }
 * @returns Default UI if product is not on sale
 */
const NoDiscount = ({ product }) => (
 <>
  <Box>
   <strong>{product.price} NOK</strong>
  </Box>
  <Box>
   <small>
    <i>(Additional tax may apply on checkout)</i>
   </small>
  </Box>
 </>
);

/**
 * AddToCart
 *
 * @param {*} { product }
 * @returns UI if product is not added to cart
 */
export const AddToCart = ({ product, cart }) => {
 const [data = product, setCart = cart.addToCart] = useLocalStorage("Cart", cart);
 return (
  <>
   <Tooltip title="Add to cart">
    <Button color="primary"      onClick={() => {
       setCart(product.id);
       cart.addToCart(product.id);
      }}
      variant="contained"
      value={data}>
     Add to cart
    </Button>
   </Tooltip>
  </>
 );
};

/**
 * AddedToCart
 *
 * @param {*} { product }
 * @returns UI if product is Added To Cart
 */
export const AddedToCart = ({ product, productAmount, cart }) => {
 const [data = product, setCart = cart.addToCart] = useLocalStorage("Cart", cart);

 return (
  <>
   <Tooltip title="Added to cart">
    <Badge badgeContent={productAmount} color="primary">
     <Button
      color="success"
      onClick={() => {
       setCart(product.id);
       cart.addToCart(product.id);
      }}
      variant="contained"
      value={data}
     >
      Added to cart
     </Button>
    </Badge>
   </Tooltip>
  </>
 );
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
   }}
   key={product.id}
  >
   <Link to={`/product/${product.id}`} style={linkStyle}>
    {product.discountedPrice < product.price ? <SaleItem product={product} /> : <NonSaleItem product={product} />}
    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
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
