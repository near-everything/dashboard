import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mintItem } from "./nearAPI";

const initialState = {
  status: "idle",
};

export const mint = createAsyncThunk("near/mint", async (data) => {
  const { id, data: item } = data;
  const response = await mintItem(id, item);
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const nearSlice = createSlice({
  name: "near",
  initialState,
  reducers: {
    setNear: (state, action) => {
      state.near = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mint.pending, (state) => {
        state.status = "loading";
      })
      .addCase(mint.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { setNear } = nearSlice.actions;

export const selectNear = (state) => state;

export default nearSlice.reducer;
