import { combineReducers } from "redux";
import {contactReducer} from "./contact"
import { editReducer } from "./Edit";
import {productReducer} from "./produit"
import {editProductReducer} from "./EditProduit"

export const rootReducer = combineReducers({contactReducer , editReducer, productReducer,editProductReducer})