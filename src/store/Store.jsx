import cartReducer from "../slices/CartSlice"; // Import the reducer, not the entire slice

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cart: cartReducer // Use the cartReducer directly
    }
});

export default store;
