import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducer.js"

const store = configureStore({reducer : cardReducer});

export default store;