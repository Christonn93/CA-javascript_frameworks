// Importing react
import React, { useContext } from "react";
import styled from "styled-components";

// Importing mui items
import { Card, CardMedia, Box, CardContent, IconButton } from "@mui/material";

// Importing mui icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Importing fetch function
import ApiHook from "../../api/ApiHooks";

// Importing cart context
import { CartContext } from "../../context/cartContext";

// Adding style
const ItemImage = styled.div`
 img {
  width: 100%;
  object-fit: cover;
 }
`;
const pageHeader = {
 margin: "0",
 padding: "0",
};

const red = {
 color: "red",
};

const CartCard = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);

 return (
  <Card
   sx={{
    display: "flex",
    height: "150",
   }}
  >
   <CardMedia component="img" image={data.imageUrl} alt={data.title} sx={{ width: 200 }} />
   <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "10px" }}>
    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
     <h3 style={pageHeader}>{data.title}</h3>
     <IconButton variant="contained" color="error" onClick={() => cart.deleteFromCart(data.id)}>
      <DeleteForeverIcon fontSize="small" />
     </IconButton>
    </CardContent>
    <CardContent sx={{ display: "flex", flex: "1 1 auto" }}>
     {data.price === data.discountedPrice ? (
      <>
       <span>{data.price} NOK</span>
      </>
     ) : (
      <>
       <span>
        {data.discountedPrice} NOK <del style={red}>{data.price} NOK</del>
       </span>
      </>
     )}
    </CardContent>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "5px" }}>
     <IconButton variant="contained" color="warning" onClick={() => cart.removeFromCart(data.id)}>
      <RemoveIcon fontSize="small" />
     </IconButton>
     {productAmount}
     <IconButton variant="contained" color="success" onClick={() => cart.addToCart(data.id)}>
      <AddIcon fontSize="small" />
     </IconButton>
    </Box>
   </Box>
  </Card>
 );
};

export default CartCard;
