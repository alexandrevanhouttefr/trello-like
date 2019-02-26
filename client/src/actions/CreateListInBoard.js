import {CREATE_LIST_IN_BOARD} from "./ActionTypes";

export default function createListInBoard(title) {
    return {
        type: CREATE_LIST_IN_BOARD,
        payload: title,
    };
}