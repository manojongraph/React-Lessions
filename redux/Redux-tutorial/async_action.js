//import redux
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddileware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: "false",
  users: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESSED = "FETCH_USER_SUCCESSED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUESTED,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESSED,
    payload: users,
  };
};
const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESSED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddileware));
console.log("Initail State : ", initialState);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
