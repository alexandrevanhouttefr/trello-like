import uniqueId from 'lodash/uniqueId';

import {
    CREATE_LIST_IN_BOARD
} from "../actions/ActionTypes";

const initState = [];

export default function(state = initState, action) {
    switch(action.type) {
        case CREATE_LIST_IN_BOARD:
            return ([
                    ...state,
                    {id: uniqueId(''), title: action.payload },
                ]
            );
        default:
            return state;
    }
}