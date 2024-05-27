import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        error:null
    },
    reducers:{
    toggleCart:(state,action)=>{
        const productId = action.payload;

        if(state.cart.includes(productId)){
            state.cart = state.cart.filter((id)=>id !==productId);
        }else{
            state.cart.push(productId);
        }
    }}
})


export const {toggleCart} = cartSlice.actions;
export default cartSlice.reducer