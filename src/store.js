import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import likeSlice from "./slice/likeSlice";
import cartSlice from "./slice/cartSlice";


export const store = configureStore({
    reducer:{
        products: productSlice,
        like: likeSlice,
        cart: cartSlice 
    }
})

