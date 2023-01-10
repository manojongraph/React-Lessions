//import redux
const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
// Action is implemented
const STREET_UPDATE = "STREET_UPDATE";
// initaial state is defined
const initialState = {
  name: "Manoj",
  address: {
    street: "123 main st",
    city: "bhilwara",
    state: "RJ",
  },
};
function updateStreet(street) {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
}

// reducer is implemented (prevState,action)=>(newState)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log("Initail State : ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State : ", store.getState())
);

store.dispatch(updateStreet("gli gli sim sim"));

unsubscribe();
