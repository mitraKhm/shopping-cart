import { createReducer } from "@reduxjs/toolkit";
import { actionType } from "./action-type";
import initState from "./init-state";

const cardReducer = createReducer (initState , {
    [actionType.ADD_PRODUCT_TO_CART] : ( state , action) => ({
        ...state ,
        productsInCard : [...state.productsInCard ,action.payLoad]
    }),
    [actionType.ADD_COUNTER] : (state, action) => 
    ({
        ...state,
        counter: state.counter + 2
    }) 
});

export default cardReducer;