// Importing react
import React from "react";
import { useState } from "react";

// Importing mui items
import { Box, Container, Grid, Stack, Button, Divider } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

// Importing components
import ProductCard from "../../components/card/SingleCard";
import SearchBar from "../../components/search/Search";

// Importing functions
import ToggleFilter from "../../components/filter/ToggleFilter";

// Importing fetch function
import ApiHook from "../../hooks/ApiHooks";

// Render function
const ProductList = () => {
 const [search, setSearch] = useState("");
 const { data } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

 return (
  <Container align="center">
   <Box>
    <Stack direction="row" spacing={2} justifyContent={"center"}>
     <SearchBar searchInput={search} setSearchInput={setSearch} data={data} />
     <Button onClick={(e) => ToggleFilter(e)}>
      <FilterAltIcon />
     </Button>
    </Stack>
    <Box mt={2}>
     <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent={"center"}>
      <Button>Sale</Button>
      <Button>Price low - high</Button>
     </Stack>
      <h3>Categories</h3>
     <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent={"center"}>
      <Button>Computer</Button>
      <Button>Fashion</Button>
      <Button>Beauty</Button>
      <Button>Toys</Button>
      <Button>Electronics</Button>
     </Stack>
    </Box>
   </Box>

   <Box
    sx={{
     flexGrow: 1,
     p: 2,
     mt: 3,
    }}
   >
    <Grid container="true" spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }} rowSpacing={3}>
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
