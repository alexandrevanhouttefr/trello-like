

import {
    CREATE_NEW_BOARD,
    INIT_NEW_BOARD
} from "../actions/ActionTypes";

const initialState = {
    isBoardOpen: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_BOARD:
            return {
                ...state,
                isBoardOpen: true,
            };
        case INIT_NEW_BOARD:
            return {
                ...state,
                isBoardOpen: false,
            };
        default:
            return state;
    }
}