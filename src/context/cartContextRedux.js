import { createContext } from "react";
import { createSlice } from "@reduxjs/toolkit";
import ApiHook from "../../hooks/ApiHooks";

export const CartContext = createContext({
  items: [],
  getProductAmount: () => {},
  getTotalPrice: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (!existingItem) {
        state.push({ id, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export function CartProvider({ children }) {
  const { data } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

  function getProductAmount(id) {
    const item = state.find((el) => el.id === id);

    if (!item) {
      return 0;
    }

    return item.quantity;
  }

  function getTotalPrice() {
    let subTotal = 0;

    state.forEach((item) => {
      const productData = data.find((product) => product.id === item.id);
      subTotal += productData.discountedPrice * item.quantity;
    });

    return subTotal;
  }

  const cart = cartSlice.reducer;

  const value = {
    items: cart,
    getProductAmount,
    getTotalPrice,
    addToCart: (id) => dispatch(addItem({ id })),
    removeFromCart: (id) => dispatch(removeItem({ id })),
    deleteFromCart: (id) => dispatch(removeItem({ id })),
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}