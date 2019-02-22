import {
    INIT_NEW_BOARD,
    SUBMIT_NEW_BOARD_TO_COLLECTION,
} from "./ActionTypes";

export default function submitNewBoardToCollection(title) {
    return {
        type: SUBMIT_NEW_BOARD_TO_COLLECTION,
        payload: title
    };
}