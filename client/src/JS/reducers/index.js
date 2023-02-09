import { combineReducers } from "redux";
import {contactReducer} from "./contact"
import { editReducer } from "./Edit";
import {productReducer} from "./produit"
import {editProductReducer} from "./EditProduit"
import {commandReducer} from "./command"
import {editCommandReducer} from "./EditCommand"

export const rootReducer = combineReducers({contactReducer , editReducer, productReducer,editProductReducer, commandReducer,editCommandReducer})