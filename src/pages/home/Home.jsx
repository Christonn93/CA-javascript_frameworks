// Importing react
import React from "react";
import styled from "styled-components";

// Importing context
import HomeContext from "../../context/HomePage";

// Importing Layouts
import ProductList from "../../layouts/product/ProductList";

// Styled component
const Line = styled.hr`
 width: 100%;
 height: 5px;
 border-style: solid;
 border-color: hsla(0, 0%, 75%, 0.9);
 border-width: 1px 0 0 0;
`;

/**
 * Home.
 * This function is rendering content that will display in the home page of the site.
 *
 * @returns Content on the home page
 */
const Home = () => {
 const PageContent = (
  <>
   <HomeContext />
   <br />
   <Line />
   <ProductList />
  </>
 );

 return PageContent;
};

export default Home;
