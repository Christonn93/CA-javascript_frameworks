import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import ApiHook from "../../api/ApiHooks";

const SubTotal = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);

 const totalCost = [];
 const itemPrice = data
 totalCost.push(itemPrice);

 console.log(totalCost);

 return <></>;
};

export default SubTotal;
