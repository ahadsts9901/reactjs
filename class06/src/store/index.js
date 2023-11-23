import { applyMiddleware, createStore } from "redux";
import CounterReducer from "./Reducers/counterReducer";
import thunk from "redux-thunk";
import combineReducer from "./combineReducer/Combinereducer";

const store = createStore(combineReducer, applyMiddleware(thunk));
export default store