// Importing react
import React from "react";

// Importing mui items
import { FormControl, TextField, Autocomplete } from "@mui/material";

import SearchListItem from "./SearchListItem";

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

 return (
  <form onSubmit={(e) => e.preventDefault()}>
   <FormControl>
    <Autocomplete
     clearOnEscape
     id="searchBar"
     options={option}
     onChange={(event, value) => setSearchInput(value)}
     isOptionEqualToValue={(option, value) => option.label === value.label}
     noOptionsText={"No match found"}
     renderOption={(props, option) => <SearchListItem props={props} option={option} />}
     sx={{ width: 400 }}
     value={searchInput}
     renderInput={(params) => <TextField {...params} fullWidth id="outlined-controlled" label="Search products" onChange={onSearch} clearOnEscape />}
    />
   </FormControl>
  </form>
 );
};

export default SearchBar;
