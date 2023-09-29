import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // return state.items.filter((item) => item.id !== action.payload);

      const indexItem = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (indexItem !== -1) {
        state.items.splice(indexItem, 1);
      }
    },

    clearItem: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = CartSlice.actions;

export default CartSlice.reducer;
