import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    }
});