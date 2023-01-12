import { EDIT_FALSE, EDIT_TRUE } from "../constant/productActionTypes";

export const editTrue = ()=>{
    return{
        type:EDIT_TRUE
    }
}

export const editFalse = ()=>{
    return{
        type:EDIT_FALSE
    }
}