import {SIGN_IN} from "./ActionTypes";

import axios from "axios";

export function signIn(){
    return(dispatch)=>{
        return axios.get("http://localhost:3001/user/signin").then((response)=>{
            dispatch(signInSuccess(response));
        })
    }
}

export function signInSuccess(response){
    return{
        type:"SIGN_IN",
        payload:response
    }
}
