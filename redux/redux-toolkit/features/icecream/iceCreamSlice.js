const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfIceCream: 20,
};
const IceCreamSlice = createSlice({
  name: "iceCream",
  initialState, // if key and value both are same intialState
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--; // state.numOfIceCream = state.numOfIceCream - 1
    },
    restock: (state, action) => {
      state.numOfIceCream += action.payload; // state.numOfIceCream = state.numOfIceCream + action.payload
    },
  },
  // way 1
  // extraReducers:{
  //   ['cake/ordered']:(state) => {
  //     state.numOfIceCream--
  //   }
  // }
  
  // Way 2 (recomandded )
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCream--;
    });
  },
});

module.exports = IceCreamSlice.reducer;
module.exports.iceCreamActions = IceCreamSlice.actions;
