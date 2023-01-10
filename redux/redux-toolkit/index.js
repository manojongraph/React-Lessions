const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions
console.log("Initial State :- ", store.getState());

const unsubscribe = store.subscribe(() => {
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restock(2));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restock(2));


unsubscribe();
