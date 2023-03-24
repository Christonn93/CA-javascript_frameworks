// Importing react
import React from "react";

// Importing mui items
import { FormControl, TextField, Autocomplete } from "@mui/material";

// Importing components
import SearchListItem from "./SearchListItem";

/**
 * Search component
 * This will filter and render out the search input made from the user.
 *
 * @param {*}
 * @returns User search results will display
 */
const SearchBar = ({ searchInput, setSearchInput, data }) => {
 const option = data.map((e) => {
  let productItems = { label: e.title, id: e.id };
  return productItems;
 });

 return (
  <form onSubmit={(e) => e.preventDefault()}>
   <FormControl>
    <Autocomplete
     selectOnFocus
     clearOnBlur
     handleHomeEndKeys
     disableClearable
     freeSolo
     sx={{ width: 240 }}
     id="SearchBar"
     options={option}
     noOptionsText={"No match found"}
     value={searchInput}
     onChange={(event, newValue) => {
      if (newValue === null) {
       return;
      }
      if (typeof newValue === "string") {
       setSearchInput(newValue.label);
      } else if (newValue && newValue.inputValue) {
       // Create a new value from the user input
       setSearchInput(newValue.label);
      } else {
       setSearchInput(newValue.label);
      }
     }}
     getOptionLabel={(option) => {
      // Value selected with enter, right from the input
      if (typeof option === "string") {
       return option;
      }
      // Add "xxx" option created dynamically
      if (option.label) {
       return option.label;
      }
      // Regular option
      return option.label;
     }}
     renderOption={(props, option) => <SearchListItem props={props} option={option} />}
     renderInput={(params) => (
      <TextField
       {...params}
       id="outlined-controlled"
       label="Search products"
       onChange={(e) => {
        setSearchInput(e.target.value);
       }}
      />
     )}
    />
   </FormControl>
  </form>
 );
};

export default SearchBar;
