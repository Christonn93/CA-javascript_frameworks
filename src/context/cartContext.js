import { createContext, useState, useEffect } from "react";
import ApiHook from "../api/ApiHooks";

export const CartContext = createContext({
 items: [],
 getProductAmount: () => {},
 getTotalPrice: () => {},
 addToCart: () => {},
 removeFromCart: () => {},
 deleteFromCart: () => {},
 clearCart: () => {},
});

export function CartProvider({ children }) {
 const [products, setProducts] = useState(() => {
  const localData = localStorage.getItem("Products");
  return localData ? JSON.parse(localData) : [];
 });

 useEffect(() => {
  localStorage.setItem("Products", JSON.stringify(products));
 }, [products]);

 // Getting product quantity added to cart
 function getProductAmount(id) {
  const quantity = products.find((el) => el.id === id)?.quantity;

  if (quantity === undefined) {
   return 0;
  }
  return quantity;
 }

 // Function to items add to cart
 function addToCart(id) {
  const quantity = getProductAmount(id);

  // Checking if the cart already have the item in cart
  if (quantity === 0) {
   setProducts([
    ...products,
    {
     id: id,
     quantity: 1,
    },
   ]);
  } else {
   setProducts(products.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)));
  }
 }

 // Function to remove items from cart
 function removeFromCart(id) {
  const quantity = getProductAmount(id);

  if (quantity === 1) {
   deleteFromCart(id);
  } else {
   setProducts(products.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product)));
  }
 }

 function deleteFromCart(id) {
  setProducts((products) =>
   products.filter((currentProduct) => {
    return currentProduct.id !== id;
   })
  );
 }

 function getTotalPrice(cart) {
  const cartItem = cart.items;
  const item = cartItem.map((e) => ApiHook(`https://api.noroff.dev/api/v1/online-shop/${e.id}`));
  console.log(item);
 }

 function clearCart() {
  localStorage.removeItem("Products");
 }

 const value = {
  items: products,
  getProductAmount,
  getTotalPrice,
  addToCart,
  removeFromCart,
  deleteFromCart,
  clearCart,
 };

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
