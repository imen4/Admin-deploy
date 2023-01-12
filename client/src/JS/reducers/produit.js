import {GET_PRODUCTS_LOAD,GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS,GET_PRODUCT} from "../constant/productActionTypes";

const initialState = {
    products:[],
    msg:"",
    product:{},
    loadProducts : false,
    errors:[],
    editProduct:""
}

export const productReducer = (state = initialState , {type , payload ,payMsg}) =>{
    switch (type) {
        case GET_PRODUCTS_LOAD:
            return {...state , loadProducts:true}
        case GET_PRODUCTS_SUCCESS: 
            return {...state , loadProducts:false , products:payload , msg:payMsg}
        case GET_PRODUCTS_FAIL:
            return {...state, loadProducts:false , errors:payload }
        case GET_PRODUCT:
            return {...state,  product:payload }
        
        default:
            return state
    }
}