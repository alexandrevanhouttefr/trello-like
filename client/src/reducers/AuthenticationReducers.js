import {
    SIGN_IN
} from "../actions/ActionTypes";

const initialState = {
    currentUser: [],
};

export default function(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case SIGN_IN:
            return state;
        default:
            return state;
    }
}