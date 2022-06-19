import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import post from "./modules/post"
import user from "./modules/user"

const middlewares = [thunk]
const rootReducer = combineReducers({post,user})
const enhancer = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancer)

export default store