const createSlice = require("@reduxjs/toolkit").createSlice;
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

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions