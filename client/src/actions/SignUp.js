import {SIGN_UP} from "./ActionTypes";

import axios from "axios";

export function signUp(username, password, passwordConf){
    return(dispatch)=>{
        return axios.post("http://localhost:3001/user/signup", {
            username: username,
            password: password,
            passwordConf: passwordConf
        }).then((response)=>{
            dispatch(signUpSuccess(response));
        })
    }
}

export function signUpSuccess(response){
    return{
        type:SIGN_UP,
        payload:response
    }
}
