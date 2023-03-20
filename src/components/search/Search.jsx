// Importing react
import React from "react";

// Importing mui items
import { FormControl, TextField, Autocomplete } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Search component
 * This will filter and render out the search input made from the user.
 *
 * @param {*}
 * @returns User search results will display
 */
const SearchBar = ({ searchInput, setSearchInput, data }) => {
 function onSearch(e) {
  setSearchInput(e.target.value);
 }

 const option = data.map((e) => {
  let productItems = { label: e.title, id: e.id, price: e.discountedPrice };
  return productItems;
 });

 const linkStyle = {
  textDecoration: "none",
  color: "black",
  textTransform: "initial",
 };

 return (
  <form onSubmit={(e) => e.preventDefault()}>
   <FormControl>
    <Autocomplete
     clearOnEscape
     id="searchBar"
     options={option}
     sx={{ width: 300 }}
     value={searchInput}
     renderOption={(props, option) => {
      return (
       <li {...props} key={option.id}>
        <Link to={`/product/${option.id}`} style={linkStyle}>
         {option.label}
        </Link>
       </li>
      );
     }}
     renderInput={(params) => <TextField {...params} fullWidth id="outlined-controlled" label="Search products" onChange={onSearch} clearOnEscape />}
    />
   </FormControl>
  </form>
 );
};

export default SearchBar;
