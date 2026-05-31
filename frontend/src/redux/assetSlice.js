import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Laptop", status: "Assigned" },
  ],
};

const assetSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    addAsset: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addAsset } = assetSlice.actions;
export default assetSlice.reducer;