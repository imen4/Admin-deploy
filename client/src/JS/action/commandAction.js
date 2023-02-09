import axios from "axios";
import {GET_COMMANDS_LOAD,GET_COMMANDS_FAIL,GET_COMMANDS_SUCCESS , GET_COMMAND} from "../constant/commandActionTypes"

export const getCommands = ()=>async(dispatch) =>{
    dispatch({type:GET_COMMANDS_LOAD})
    try {
        let result = await axios.get('/api/command/')
        console.log(result)
        dispatch({type:GET_COMMANDS_SUCCESS , payload : result.data.response , payMsg:result.data.message})
    } catch (error) {
        dispatch({type:GET_COMMANDS_FAIL,payload:error})
        console.log(error)
    }
}

export const deleteCommand = (id)=>(dispatch)=>{
    axios.delete(`/api/command/${id}`)
    .then(()=>dispatch(getCommands()))
    .catch((err)=>console.log(err))
}

export const getCommand = (id)=>(dispatch)=>{
    axios.get(`/api/command/${id}`)
    .then((res)=>dispatch({type:GET_COMMAND , payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const postCommand = (command)=> async(dispatch)=>{
    try {
        await axios.post('/api/command/new',command)
        dispatch(getCommands())
    } catch (error) {
        console.log(error)
    }
}

export const editCommand = (id,command)=>async (dispatch)=>{
     try {
        await axios.put(`/api/command/${id}`,command)
        dispatch(dispatch(getCommands()))
     } catch (error) {
        console.log(error)
     }

}