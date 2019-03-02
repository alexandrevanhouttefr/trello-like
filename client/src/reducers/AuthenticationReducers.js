import {
    SIGN_IN
} from "../actions/ActionTypes";

const initialState = {
    token: '',
};

export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                token: action.payload.data.token,
            };
        default:
            return state;
    }
}