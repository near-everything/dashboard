import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  category: {},
  subcategory: {},
  attribute: {},
};

export const describeSlice = createSlice({
  name: "describe",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubcategory: (state, action) => {
      state.subcategory = action.payload;
    },
    setAttribute: (state, action) => {
      state.brand = action.payload;
    },
    resetDescribe: () => initialState,
  },
});

export const { setCategory, setSubcategory, setAttribute, resetDescribe } =
  describeSlice.actions;

export default describeSlice.reducer;
