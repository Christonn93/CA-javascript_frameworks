import { createSlice, configureStore } from '@reduxjs/toolkit';
import ApiHook from '../hooks/ApiHooks';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const quantity = getProductAmount(state, id);

      // Checking if the cart already has the item in the cart
      if (quantity === 0) {
        state.items.push({ id, quantity: 1 });
      } else {
        const itemIndex = state.items.findIndex((item) => item.id === id);
        state.items[itemIndex].quantity++;
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const quantity = getProductAmount(state, id);

      if (quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const itemIndex = state.items.findIndex((item) => item.id === id);
        state.items[itemIndex].quantity--;
      }
    },
    deleteFromCart(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectProductAmount = (state, id) => {
  const quantity = state.cart.items.find((item) => item.id === id)?.quantity;

  if (quantity === undefined) {
    return 0;
  }

  return quantity;
};

export const selectTotalPrice = (state) => {
  const { data } = ApiHook("https://api.noroff.dev/api/v1/online-shop");
  let subTotal = 0;
  data.forEach((item) => {
    const productData = data;
    subTotal += productData.discountedPrice * item.quantity;
  });
  return subTotal;
};

function getProductAmount(state, id) {
  return selectProductAmount(state, id);
}

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;