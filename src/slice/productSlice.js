import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios.get('https://664f80c0ec9b4a4a602f0386.mockapi.io/product');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || error.response.data.message);
    }
  }
);
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
//   const res = await fetch('https://664f80c0ec9b4a4a602f0386.mockapi.io/crud_redux', {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data)
//   });

//   try {
//       const result = await res.json();
//       return result
//   } catch (error) {
//       return rejectWithValue(error)
//   }
// })
export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`https://664f80c0ec9b4a4a602f0386.mockapi.io/product/${id}`);
      return { id };  // Returning just the id as we need to identify the deleted product
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk('addProduct',async (data,{rejectWithValue})=>{
    try {
      const res = await axios.post(`https://664f80c0ec9b4a4a602f0386.mockapi.io/product/`,data);
        return res;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateProduct = createAsyncThunk('updateProduct',async(data,{rejectWithValue})=>{
  try {
    
    const res = await axios.put(`https://664f80c0ec9b4a4a602f0386.mockapi.io/product/${data.id}`,data);
    console.log(res)
    return res.data
  } catch (error) {
    return   rejectWithValue(error)
    }
})


export const productDetail = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
    searchData:''
  },

  reducers:{
    searchData: (state,action)=>{
      state.searchData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      const id = action.payload.id;
      if (id) {
        state.products = state.products.filter((prod) => prod.id !== id);
      }
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    builder.addCase(addProduct.pending,(state)=>{
        state.loading = true;
    })
    builder.addCase(addProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.products.push(action.payload)
    })
    builder.addCase(addProduct.rejected,(state,action)=>{
        state.loading = false;
        state.products = action.payload
    })


    builder.addCase(updateProduct.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(updateProduct.fulfilled,(state,action)=>{
      state.loading = false;
      state.products = state.products.map((ele)=> ele.id === action.payload.id ? action.payload : ele)
    })
    builder.addCase(updateProduct.rejected,(state,action)=>{
      state.loading = false;
      state.products = action.payload
    })
  },
});

export default productDetail.reducer;
export const {searchData} = productDetail.actions