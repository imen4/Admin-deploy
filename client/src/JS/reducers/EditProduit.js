import { EDIT_FALSE, EDIT_TRUE } from "../constant/productActionTypes";

const initialState = {
    edit:false
}

export const editProductReducer = (state = initialState , {type}) =>{
    switch (type) {
        case EDIT_TRUE:
            return {...state , edit:true}
        case EDIT_FALSE:    
            return {...state , edit:false}
    
        default:
            return state;
    }
}