//import redux
const redux = require("redux");
const createStore = redux.createStore;
// Action is implemented
const CAKE_ORDERED = "CAKE_ORDERED";
function order_cake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
const CAKE_ADDED = "CAKE_ADDED";
function add_cake(qty = 1) {
  return {
    type: CAKE_ADDED,
    payload: qty,
  };
}
// initaial state is defined
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

// reducer is implemented (prevState,action)=>(newState)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_ADDED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initail State : ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State : ", store.getState())
);

store.dispatch(order_cake());
store.dispatch(order_cake());
store.dispatch(order_cake());

store.dispatch(add_cake(3));

unsubscribe();
store.dispatch(order_cake());
