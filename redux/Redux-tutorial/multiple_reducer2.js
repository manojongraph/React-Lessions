//import redux
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Action is implemented
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_ADDED = "CAKE_ADDED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_ADDED = "ICECREAM_ADDED";

function order_cake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}
function add_cake(qty = 1) {
  return {
    type: CAKE_ADDED,
    payload: qty,
  };
}
function order_icecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function add_icecream(qty = 1) {
  return {
    type: ICECREAM_ADDED,
    payload: qty,
  };
}
// initaial state is defined
const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecream: 10,
};

// reducer is implemented (prevState,action)=>(newState)
const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payload,
      };
    case ICECREAM_ADDED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
console.log("Initial State : ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State : ", store.getState())
);

// dispacth action vis bindActionCreators
const actions = bindActionCreators(
  { order_cake, add_cake, order_icecream, add_icecream },
  store.dispatch
);

actions.order_cake();
actions.order_cake();
actions.order_cake();
actions.add_cake(3);
actions.order_icecream(2);
actions.order_icecream();
actions.add_icecream(5);
unsubscribe();
