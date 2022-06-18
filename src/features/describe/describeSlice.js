import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertItem } from "./describeAPI";

const initialState = {
  status: "idle",
  category: {},
  subcategory: {},
  attribute: {},
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const insert = createAsyncThunk("describe/insert", async (data) => {
  const { item, user } = data;
  const response = await insertItem(item, user);
  // The value we return becomes the `fulfilled` action payload
  return response;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(insert.pending, (state) => {
        state.status = "loading";
      })
      .addCase(insert.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { setCategory, setSubcategory, setAttribute, resetDescribe } =
  describeSlice.actions;

export default describeSlice.reducer;
