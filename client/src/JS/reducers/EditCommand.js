import { EDIT_FALSE, EDIT_TRUE } from "../constant/commandActionTypes";

const initialState = {
    edit:false
}

export const editCommandReducer = (state = initialState , {type}) =>{
    switch (type) {
        case EDIT_TRUE:
            return {...state , edit:true}
        case EDIT_FALSE:    
            return {...state , edit:false}
    
        default:
            return state;
    }
}