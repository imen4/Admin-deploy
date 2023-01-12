import axios from "axios";
import {GET_PRODUCTS_LOAD,GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS , GET_PRODUCT} from "../constant/productActionTypes"

export const getProducts = ()=>async(dispatch) =>{
    dispatch({type:GET_PRODUCTS_LOAD})
    try {
        let result = await axios.get('/api/product/')
        console.log(result)
        dispatch({type:GET_PRODUCTS_SUCCESS , payload : result.data.response , payMsg:result.data.message})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL,payload:error})
        console.log(error)
    }
}

export const deleteProduct = (id)=>(dispatch)=>{
    axios.delete(`/api/product/${id}`)
    .then(()=>dispatch(getProducts()))
    .catch((err)=>console.log(err))
}

export const getProduct = (id)=>(dispatch)=>{
    axios.get(`/api/product/${id}`)
    .then((res)=>dispatch({type:GET_PRODUCT , payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const postProduct = (product)=> async(dispatch)=>{
    try {
        await axios.post('/api/product/new',product)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}

export const editProduct = (id,product)=>async (dispatch)=>{
     try {
        await axios.put(`/api/product/${id}`,product)
        dispatch(dispatch(getProducts()))
     } catch (error) {
        console.log(error)
     }

}