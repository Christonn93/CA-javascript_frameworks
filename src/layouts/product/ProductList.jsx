// Importing react
import React from "react";
import { useState } from "react";

// Importing mui items
import { Box, Grid } from "@mui/material";

// Importing components
import ProductCard from "../../components/card/SingleCard";

// Importing utils
import LoadingAnimation from "../../utils/LoadingAnimation";
import ErrorResponse from "../../utils/ErrorResponse";

// Importing api hook
import ApiHook from "../../hooks/ApiHooks";

// Render function
const ProductList = () => {
 const [search, setSearch] = useState("");

 // Fetching the data
 const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

 // Displaying loading div
 if (isLoading) {
  return <LoadingAnimation />;
 }

 // Displaying error for the user if something is wrong
 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 // Display error if something wrong with Map
 if (!data.map) {
  return <ErrorResponse severity="error" title="Oh NO! Map error" content="Obs. We could not load your data. Please try again later" />;
 }

 return (
  <>
   <form>
    <input type={"text"} id="searchInput" onChange={(e) => setSearch(e.target.value)} placeholder="Search products" />
   </form>
   <Box
    sx={{
     flexGrow: 1,
     padding: 2,
    }}
   >
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={3}>
     {data
      .filter((product) => {
       return search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search);
      })
      .map((product) => (
       <Grid item xs={2} sm={4} md={4} key={product.id}>
        <ProductCard
         data={product}
         title={product.title}
         image={product.imageUrl}
         tag={product.tags}
         id={product.id}
         productPath={`/product/${product.id}`}
         discountPrice={product.discountedPrice}
         price={product.price}
        />
       </Grid>
      ))}
    </Grid>
   </Box>
  </>
 );
};

export default ProductList;
