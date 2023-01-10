import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState, // if key and value both are same intialState
  reducers: {
    ordered: (state) => {
      state.numOfCakes--; // state.numOfCakes = state.numOfCakes - 1
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload; // state.numOfCakes = state.numOfCakes + action.payload
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restock } = cakeSlice.actions;
