import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./CounterSlice"



export const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
})