import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

// Action products
export const productsFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response?.data;
  }
);

// reducers
const productSlice = createSlice({
  name: "produts",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
