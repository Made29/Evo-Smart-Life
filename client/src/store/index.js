import { applyMiddleware, createStore } from 'redux'
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"
import logger from "./middleware/logger"

let store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store