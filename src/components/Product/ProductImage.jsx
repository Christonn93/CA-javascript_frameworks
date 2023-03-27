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

const ProductImage = (props) => {
 return (
  <>
   <ItemImage>
    <img src={props.imageUrl} alt={props.alt} loading={"lazy"} />
   </ItemImage>
  </>
 );
};

export default ProductImage;
