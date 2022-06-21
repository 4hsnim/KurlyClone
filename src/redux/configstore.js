import { useSelector } from "react-redux";
import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import postReducer from "./modules/post"
import user from "./modules/user"
import detailReducer from "./modules/detail"

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        post: postReducer,
        detail: detailReducer
    }
})

export default store

