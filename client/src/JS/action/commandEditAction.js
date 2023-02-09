import { EDIT_FALSE, EDIT_TRUE } from "../constant/productActionTypes";

export const commandEditTrue = ()=>{
    return{
        type:EDIT_TRUE
    }
}

export const commandEditFalse = ()=>{
    return{
        type:EDIT_FALSE
    }
}