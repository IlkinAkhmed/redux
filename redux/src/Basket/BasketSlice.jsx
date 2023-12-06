import { createSlice } from "@reduxjs/toolkit";

const initialBasket = localStorage.getItem("basketArr")
  ? JSON.parse(localStorage.getItem("basketArr"))
  : [];

const initialState = {
  value: initialBasket,
};

export const Basketslice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addbasket: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        find.count++;
      } else {
        state.value.push(action.payload);
      }
    },
    increase: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        find.count++;
      }
    },
    decrease: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        if (find.count === 1) {
          return;
        }
        find.count--;
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { addbasket, increase, decrease, remove } = Basketslice.actions;
export default Basketslice.reducer;
