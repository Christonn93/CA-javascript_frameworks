// Importing react
import React from "react";
import { useState } from "react";

// Importing mui items
import { FormControl, TextField, Autocomplete } from "@mui/material";

const SearchBar = (props) => {
 let [search, setSearch] = useState("");

 search = props.search;

 const option = props.data
  .filter((product) => {
   return search.toLowerCase() === "No product found" ? product : product.title.toLowerCase().includes(search);
  })
  .map((e) => {
   let productItems = { label: e.title };
   return productItems;
  });

 return (
  <form onSubmit={(e) => e.preventDefault()}>
   <FormControl>
    <Autocomplete
     disablePortal
     id="searchBar"
     options={option}
     sx={{ width: 300 }}
     renderInput={(params) => <TextField {...params} fullWidth id="outlined-controlled" label="Search products" onChange={(e) => setSearch(e.target.value)} />}
    />
   </FormControl>
  </form>
 );
};

export default SearchBar;
