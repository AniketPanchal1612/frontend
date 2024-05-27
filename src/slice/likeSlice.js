import { createSlice } from "@reduxjs/toolkit";




export const likeSlice = createSlice({
    name:'like',
    initialState:{
        likes:[],
        error:null,
    },
    reducers:{
        toggleLike:(state,action)=>{
            const productId = action.payload;
            console.log(productId)
            if(state.likes.includes(productId)){
                state.likes = state.likes.filter((id)=>id !==productId)
            }
            else{
                state.likes.push(productId);
            }
        }
    }
})


export const {toggleLike} = likeSlice.actions;
export default likeSlice.reducer;