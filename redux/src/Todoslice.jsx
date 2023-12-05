import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const Todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id);
    },
    update: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        console.log(find.name);
      }
    },
  },
});
export const { addtodo, remove, update } = Todoslice.actions;
export default Todoslice.reducer;
