// Importing react
import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { experimentalStyled as style } from "@mui/material/styles";
import { IconButton, Tooltip, Button, ButtonGroup, Paper } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PriceDisplay from "../../utils/PriceDisplay";
import { Box } from "@mui/system";

// Styling components
const Item = style(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#d3d3d3",
 ...theme.typography.body2,
 textAlign: "center",
 color: theme.palette.text.secondary,
 boxShadow: 3,
 borderRadius: 2,
}));

const Sale = styled.span`
 position: absolute;
 color: white;
 background-color: red;
 top: -0.5rem;
 left: -0.5rem;
 filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
 padding: 5px;
 font-size: 18px;
 text-align: center;
 border-radius: 5px;
`;

const Content = styled.div`
 display: grid;
 grid-template-rows: 1fr 1fr auto auto;
 height: 100%;
`;

const ItemImage = styled.div`
 height: 200px;
 border-radius: 0;
 position: relative;
 margin-bottom: 15px;

 img {
  width: 100%;
  height: 100%;
 }
`;

/**
 *
 * @param {*} props
 * @returns
 */
const ProductCard = (props) => {
 const price = PriceDisplay(props.data);

 if (props.discountPrice >= props.price) {
  return (
   <Item key={props.id}>
    <Content>
     <ItemImage>
      <img src={props.image} alt={props.title} loading={"lazy"} />
     </ItemImage>
     <Box>
      <h2>{props.title}</h2>
      <span>{props.rating}</span>
      <span>{price}</span>
     </Box>
     <Box>
      <span>{props.tag.join(", ")}</span>
     </Box>
     <Box container p={2}>
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
       <Link to={props.productPath}>
        <Tooltip title="View product">
         <Button>View product</Button>
        </Tooltip>
       </Link>
       <Tooltip title="Add to cart">
        <IconButton color="success">
         <AddShoppingCartOutlinedIcon />
        </IconButton>
       </Tooltip>
      </ButtonGroup>
     </Box>
    </Content>
   </Item>
  );
 } else {
  return (
   <Item key={props.id}>
    <Content>
     <ItemImage>
     <Sale>SALE!</Sale>
      <img src={props.image} alt={props.title} loading={"lazy"} />
     </ItemImage>
     <Box>
      <h2>{props.title}</h2>
      <span>{props.rating}</span>
      <span>{price}</span>
     </Box>
     <Box>
      <span>{props.tag.join(", ")}</span>
     </Box>
     <Box container p={2}>
      <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
       <Link to={props.productPath}>
        <Tooltip title="View product">
         <Button>View product</Button>
        </Tooltip>
       </Link>
       <Tooltip title="Add to cart">
        <IconButton color="success">
         <AddShoppingCartOutlinedIcon />
        </IconButton>
       </Tooltip>
      </ButtonGroup>
     </Box>
    </Content>
   </Item>
  );
 }
};

export default ProductCard;
