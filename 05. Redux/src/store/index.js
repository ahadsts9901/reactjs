import { createStore } from "redux";
import CounterReducer from "./Reducers/counterReducer";

const store = createStore(CounterReducer);
export default store