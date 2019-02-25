import uniqueId from 'lodash/uniqueId';

import {
    SUBMIT_NEW_BOARD_TO_COLLECTION,
    UPDATE_POSITION_BOARD_IN_COLLECTION
} from "../actions/ActionTypes";

const initState = [];

export default function(state = initState, action) {
    switch(action.type) {
        case SUBMIT_NEW_BOARD_TO_COLLECTION:
            return ([
                ...state,
                    {id: uniqueId(''), title: action.payload },
                ]
            );
        case UPDATE_POSITION_BOARD_IN_COLLECTION:
            return (action.payload);
        default:
            return state;
    }
}