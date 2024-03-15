import { combineReducers } from "redux";
import CounterReducer from "../Reducers/counterReducer";
import { GetProductsReducer } from "../Reducers/ProductReducer";

const combineReducer = combineReducers({
    CounterReducer:CounterReducer,
    GetProductsReducer:GetProductsReducer
})

export default combineReducer