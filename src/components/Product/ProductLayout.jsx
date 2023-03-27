// Importing React
import React, { useContext } from "react";
import styled from "styled-components";

// Importing MUI
import { Grid, Box, Button, ButtonGroup, Paper } from "@mui/material";

// Importing MUI Icons
import FavoriteIcon from "@mui/icons-material/Favorite";

// Importing cart context
import { CartContext } from "../../context/cartContext";

// Importing product components
import Review from "./Review";

// Importing buttons
import AddToCart from "../../utils/ProductCard/AddToCart";
import AddedToCart from "../../utils/ProductCard/AddedToCart";

// Styled component
const Line = styled.hr`
 width: 100%;
 height: 5px;
 border-style: solid;
 border-color: hsla(0, 0%, 75%, 0.9);
 border-width: 1px 0 0 0;
`;

const pageHeader = {
 margin: "0",
 padding: "0",
};

const red = {
 color: "red",
};

const ProductLayout = (props) => {
 const data = props.data;

console.log(data)

 // Setting up the cart function's
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(data.id);

 return (
  <>
   <Box sx={{ flexGrow: 1 }} id="productBox">
    <Paper elevation={0} square={false}>
     <Box p={2}>
      <Grid container spacing={2} columns={{ xs: 1, md: 10, lg: 12 }} order={{ xs: 1, sm: 2 }} justifyContent={"center"}>
       <Grid item xs={12} order={{ xs: 1, md: 1, lg: 1 }}>
        <h2 style={pageHeader}>{data.title}</h2>
        <Line />
        <p>Category: {data.tags.join(", ")}</p>
       </Grid>
       <Grid item xs={6} order={{ xs: 3, md: 3, lg: 2 }}>
        <Grid container direction="column" spacing={2}>
         <Grid item marginBottom={3}>
          <h4>Product description:</h4>
          <Line />
          <p>{data.description}</p>
          <p>
           Lorem ipsum dolor sit amet, nec ne delectus signiferumque. Ei pri porro singulis, no quot saperet facilisis sed, no instructior intellegebat usu. Id mei ullum graece oportere, vis at
           expetendis signiferumque, sint volumus mel cu. Quodsi senserit aliquando ne pri, vim gubergren percipitur ei. (added this to fill out the page a bit more so the design would work good)
          </p>
         </Grid>
         <Grid container alignItems="center" justifyContent={"space-between"} spacing={1} marginBottom={2} p={2} border>
          <Grid item>
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
          </Grid>
          <Grid item>
           <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
            {productAmount > 0 ? <AddedToCart product={data} productAmount={productAmount} cart={cart} /> : <AddToCart product={data} cart={cart} />}
            <Button variant="outlined" color="primary">
             <FavoriteIcon />
            </Button>
           </ButtonGroup>
          </Grid>
         </Grid>
        </Grid>
       </Grid>

       <Grid item xs={6} order={{ xs: 2, md: 2 }}>
        <Grid container direction="column" spacing={2} alignContent="center">
         <Grid item>
          <img src={data.imageUrl} alt={data.imageUrl} loading="lazy" />
         </Grid>
        </Grid>
       </Grid>
       <Grid item xs={12} order={{ xs: 4, md: 4 }}>
        <Line />
        <Grid item xs={12}>
         <h3>Reviews</h3>
        </Grid>
        <Grid item xs={12}>
         <Grid container direction="column" spacing={2} rowSpacing={2}>
          {data.reviews.map((e) => {
           if (e !== null) {
            return (
             <Grid item xs={12} key={e.id}>
              <Review data={e} />
             </Grid>
            );
           }
           return <p>There is no reviews on this item </p>;
          })}
         </Grid>
        </Grid>
       </Grid>
      </Grid>
     </Box>
    </Paper>
   </Box>
  </>
 );
};

export default ProductLayout;
