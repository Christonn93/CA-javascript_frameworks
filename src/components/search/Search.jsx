// Importing react
import React from "react";

// Importing mui items
import { FormControl, TextField, Autocomplete } from "@mui/material";


/**
 * Search component
 * This will filter and render out the search input made from the user.
 * 
 * @param {*} 
 * @returns User search results will display
 */
const SearchBar = ({ searchInput, setSearchInput, data }) => {
 function onSearch(e) {
  setSearchInput(e.currentTarget.value);
 }

 const option = data
  .filter((product) => {
   return searchInput.toLowerCase(product.title.toLowerCase()) === "No product found" ? product : product.title.toLowerCase().includes(searchInput);
  })
  .map((e) => {
   let productItems = { label: e.title.toLowerCase() };
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
     value={searchInput}
     renderInput={(params) => <TextField {...params} fullWidth id="outlined-controlled" label="Search products" onChange={onSearch} />}
    />
   </FormControl>
  </form>
 );
};

export default SearchBar;
