import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

const initialState = {
  greetings: 'Hi'
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      return {
        ...state,
        greetings: action.payload.greetings,
      };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    );
  return store;
}