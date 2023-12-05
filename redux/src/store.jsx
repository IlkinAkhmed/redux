import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./CounterSlice";
import  todoreducer  from "./Todoslice";
import  basketreducer  from "../src/Basket/BasketSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoreducer,
    basket: basketreducer,
  },
});
