import {SIGN_IN} from "./ActionTypes";

import axios from "axios";

export function signIn(username, password){
    return(dispatch)=>{
        return axios.post("http://localhost:3001/user/signin", {
            username: username,
            password: password,
        }).then((response)=>{
            dispatch(signInSuccess(response));
        })
    }
}

export function signInSuccess(response){
    return{
        type:SIGN_IN,
        payload:response
    }
}
