import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {
    //Get all
    getProductRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    //Delete
    deleteProductRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    //Update
    updateProductRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.user;
    },
    updateProductFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    //Add
    addProductRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    addProductFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getProductRequest,
  getProductSuccess,
  getProductFail,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFail,
  updateProductRequest,
  updateProductSuccess,
  updateProductFail,
  addProductRequest,
  addProductSuccess,
  addProductFail
} = productSlice.actions;

export default productSlice.reducer;
