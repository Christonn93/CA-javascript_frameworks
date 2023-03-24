// Importing react
import React from "react";
import styled from "styled-components";

// Adding style
const ItemImage = styled.div`
 height: 200px;
 border-radius: 0;
 position: relative;
 margin-bottom: 15px;

 img {
    width: 100%;
  height: 200px;
  object-fit: cover;
 }
`;

/**
 * Not sale Item
 *
 * @param {*} { product }
 * @returns UI if product is not on sale
 */
const NonSaleItem = ({ product }) => (
 <ItemImage>
  <img src={product.imageUrl} alt={product.title} loading={"lazy"} />
 </ItemImage>
);

export default NonSaleItem;
