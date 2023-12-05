import { createSlice } from "@reduxjs/toolkit";




const initialBasket = localStorage.getItem("basketArr") ? JSON.parse(localStorage.getItem("basketArr")) : [];

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
      localStorage.setItem("basketArr", JSON.stringify(state.value));
    },
    increase: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        find.count++;
      }
      localStorage.setItem("basketArr", JSON.stringify(state.value));
    },
    decrease: (state, action) => {
      const find = state.value.find((x) => x.id === action.payload.id);
      if (find) {
        find.count--;
        if (find.count === 0) {
          state.value = state.value.filter((x) => x.id !== action.payload.id);
        }
        localStorage.setItem("basketArr", JSON.stringify(state.value));
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload.id);
      localStorage.setItem("basketArr", JSON.stringify(state.value));
    },
  },
});



export const { addbasket, increase, decrease, remove } = Basketslice.actions;
export default Basketslice.reducer;
