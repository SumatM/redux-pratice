
import todoReducer from "./reducer";

import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  todo: todoReducer,
});

 const store = createStore(
  rootReducer,applyMiddleware(thunk)
);

export default store;

