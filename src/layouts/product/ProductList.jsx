// Importing react
import React from "react";
import { useState } from "react";

// Importing mui items
import { Box, Container, FormControl, Grid, TextField, Autocomplete } from "@mui/material";

// Importing components
import ProductCard from "../../components/card/SingleCard";
import SearchBar from "../../components/search/Search";

// Importing fetch function
import Products from "../../hooks/ProductsFetch";

// Render function
const ProductList = () => {
 const [search, setSearch] = useState("");

 const data = Products();

 const option = data.map((e) => {
  let productItems = { label: e.title };
  return productItems;
 });

 return (
  <Container fullWidth align="center">
   <p>Component</p>
   <SearchBar data={data} search={search} />
   <p>Hardcoded</p>
   <form onSubmit={(e) => e.preventDefault()}>
    <FormControl>
     <Autocomplete
      disablePortal
      id="searchBar"
      options={option}
      sx={{ width: 300 }}
      value={search}
      renderInput={(params) => <TextField {...params} fullWidth id="outlined-controlled" label="Search products" onChange={(e) => setSearch(e.target.value.toLowerCase())} />}
     />
    </FormControl>
   </form>
   <Box
    sx={{
     flexGrow: 1,
     p: 2,
     mt: 3,
    }}
   >
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }} rowSpacing={3}>
     {data
      .filter((product) => {
       return search.toLowerCase(product.title.toLowerCase()) === "No product found" ? product : product.title.toLowerCase().includes(search);
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
  </Container>
 );
};

export default ProductList;
