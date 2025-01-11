import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: 'margerita',
      quantity: 2,
      uintPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // TODO: payload === new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // TODO: payload === pizzaId

      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // TODO: payload === pizzaID
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.uintPrice;
    },
    decreaseItemQyantity(state, action) {
      // TODO: payload === pizzaID
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;

      item.totalPrice = item.quantity * item.uintPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQyantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;