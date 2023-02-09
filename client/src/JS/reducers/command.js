import {GET_COMMANDS_LOAD,GET_COMMANDS_FAIL,GET_COMMANDS_SUCCESS,GET_COMMAND} from "../constant/commandActionTypes";

const initialState = {
    commands:[],
    msg:"",
    command:{},
    loadCommands : false,
    errors:[],
    editCommand:""
}

export const commandReducer = (state = initialState , {type , payload ,payMsg}) =>{
    switch (type) {
        case GET_COMMANDS_LOAD:
            return {...state , loadCommands:true}
        case GET_COMMANDS_SUCCESS: 
            return {...state , loadCommands:false , commands:payload , msg:payMsg}
        case GET_COMMANDS_FAIL:
            return {...state, loadCommands:false , errors:payload }
        case GET_COMMAND:
            return {...state,  command:payload }
        
        default:
            return state
    }
}