import ApiHook from "./ApiHooks";
import LoadingAnimation from "../utils/LoadingAnimation";
import ErrorResponse from "../utils/ErrorResponse";

const Products = () => {
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

 const productsData = data;

 return productsData;
};

export default Products;
