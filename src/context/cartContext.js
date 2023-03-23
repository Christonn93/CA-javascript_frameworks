import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
 items: [],
 getProductsArray: () => {},
 getProductAmount: () => {},
 getTotalPrice: () => {},
 addToCart: () => {},
 removeFromCart: () => {},
 deleteFromCart: () => {},
 clearCart: () => {},
});

export function CartProvider({ children }) {
 // Setting products in localStorage
 const [productsArray, setProductsArray] = useState(() => {
  const localData = localStorage.getItem("Products Array");
  return localData ? JSON.parse(localData) : [];
 });

 useEffect(() => {
  localStorage.setItem("Products Array", JSON.stringify(productsArray));
 }, [productsArray]);

 // Setting cart products in localStorage
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

 function getTotalPrice() {}

 function getProductsArray(data) {
  const { title, id, discountedPrice } = data;

  setProductsArray({
   id: id,
   title: title,
   price: discountedPrice,
  });
 }

 function clearCart() {
  localStorage.removeItem("Products");
 }

 const value = {
  items: products,
  getProductsArray,
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
