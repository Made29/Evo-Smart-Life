import { combineReducers } from "redux";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    products: productReducer,
    orders: orderReducer,
});

export default rootReducer;
