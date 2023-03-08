// Importing react
import * as React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { Box, Grid, Button, ButtonGroup, Container, Paper } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Importing components
import BasicBreadcrumbs from "../../utils/BreadCrumbs";
import LoadingAnimation from "../../utils/LoadingAnimation";
import ErrorResponse from "../../utils/ErrorResponse";

// Importing hook
import ApiHook from "../../hooks/ApiHooks";
import PriceDisplay from "../../utils/PriceDisplay";
import DisplayReview from "../../components/review/ReviewData";

// Styled component
const Line = styled.hr`
 width: 100%;
 height: 5px;
 border-style: solid;
 border-color: hsla(0, 0%, 75%, 0.9);
 border-width: 1px 0 0 0;
`;

const ProductLayout = () => {
 let { id } = useParams();
 const { data, isLoading, isError } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);

 // Displaying loading div
 if (isLoading) {
  return <LoadingAnimation />;
 }

 // Displaying error for the user if something is wrong
 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 // Displaying error for the user if mapping is wrong
 if (data.map) {
  return <ErrorResponse severity="error" title="Oh NO! MAP error" content="Obs. We could not load your data. Please try again later" />;
 }

 // Setting variables for displaying data
 const price = PriceDisplay(data);
 const review = DisplayReview(data);

 return (
  <>
   <Container sx={{
    mb: 3
   }}>
    <BasicBreadcrumbs name={data.title} />
   </Container>
   <Box sx={{ flexGrow: 1 }}>
    <Container>
     <Paper elevation={5} square={false}>
      <Box p={2}>
       <Grid container spacing={2} columns={{ xs: 1, md: 10, lg: 12 }} order={{ xs: 1, sm: 2 }} justifyContent={"center"}>
        <Grid item xs={12} order={{ xs: 1, md: 1, lg: 1 }}>
         <h2>{data.title}</h2>
         <Line />
         <p>Category: {data.tags.join(", ")}</p>
        </Grid>
        <Grid item xs={6} order={{ xs: 3, md: 3, lg: 2 }}>
         <Grid container direction="column" spacing={2}>
          <Grid item marginBottom={3}>
           <h4>
            Product description:
           </h4>
           <Line />
           <p>{data.description}</p>
           <p>
            Lorem ipsum dolor sit amet, nec ne delectus signiferumque. Ei pri porro singulis, no quot saperet facilisis sed, no instructior intellegebat usu. Id mei ullum graece oportere, vis at
            expetendis signiferumque, sint volumus mel cu. Quodsi senserit aliquando ne pri, vim gubergren percipitur ei. (added this to fill out the page a bit more so the design would work good)
           </p>
          </Grid>
          <Grid container alignItems="center" justifyContent={"space-between"} spacing={1} marginBottom={2} p={2} border>
           <Grid item>{price}</Grid>
           <Grid item>
            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
             <Button variant="contained" color="primary">
              Add to cart
              <AddShoppingCartOutlinedIcon />
             </Button>
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
           <img src={data.imageUrl} alt={data.imageUrl} loading="lazy" width={"300px"} className="product-image" />
          </Grid>
         </Grid>
        </Grid>
        <Grid item xs={12} order={{ xs: 4, md: 4 }}>
         <Line />
         <Grid item xs={12}>
          <h3>Reviews</h3>
         </Grid>
         <Grid item xs={12}>
          {review}
         </Grid>
        </Grid>
       </Grid>
      </Box>
     </Paper>
    </Container>
   </Box>
  </>
 );
};

export default ProductLayout;
