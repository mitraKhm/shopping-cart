import { createAction } from "@reduxjs/toolkit";
import { actionType } from "./action-type";

const AddProductToAction = createAction(actionType.ADD_PRODUCT_TO_CART);
const IncreaseCounterAction = createAction(actionType.ADD_COUNTER);



export {
    AddProductToAction,
    IncreaseCounterAction
}