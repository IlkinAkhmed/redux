import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
  inpval: "",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    handleInput: (state,action) => {
        state.inpval = action.payload;
    },
    addtodo: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addtodo,handleInput } = todoSlice.actions;
export default todoSlice.reducer;
