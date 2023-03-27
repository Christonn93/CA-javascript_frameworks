// Importing react
import React from "react";

// Importing MUI
import { ButtonGroup } from "@mui/material";


const ProductActions = (props) => {
 return (
  <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
   {props.productAmount > 0 ? <AddedToCart product={data} productAmount={productAmount} cart={cart} /> : <AddToCart product={data} cart={cart} />}
   <Button variant="outlined" color="primary">
    <FavoriteIcon />
   </Button>
  </ButtonGroup>
 );
};

export default ProductActions;
