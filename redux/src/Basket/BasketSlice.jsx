import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const Basketslice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addbasket: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        find.count++;
        return;
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
        find.count--;
      }
    },
    remove: (state, action) => {
        state.value=state.value.filter(x=>x.id!==action.payload.id)
    },
  },
});
export const { addbasket,increase,decrease,remove } = Basketslice.actions;
export default Basketslice.reducer;
