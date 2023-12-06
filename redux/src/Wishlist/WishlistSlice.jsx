import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const currentWishlistArr = localStorage.getItem("WishlistProducts")
  ? JSON.parse(localStorage.getItem("WishlistProducts"))
  : [];

const initialState = {
  value: currentWishlistArr,
};
export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);

      if (find) {
        state.value = state.value.filter(x=>x.id!==find.id)
      } else {
        state.value.push(action.payload);
      }
      localStorage.setItem("WishlistProducts", JSON.stringify(state.value));
    },
    remove: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id);
      localStorage.setItem("WishlistProducts", JSON.stringify(state.value));
    },
  },
});
export const { addWishlist, remove } = WishlistSlice.actions;
export default WishlistSlice.reducer;
