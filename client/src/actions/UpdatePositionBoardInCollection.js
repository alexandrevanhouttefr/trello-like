import {
    UPDATE_POSITION_BOARD_IN_COLLECTION
} from "./ActionTypes";

export default function updatePositionBoardInCollection(boardCollection) {
    return {
        type: UPDATE_POSITION_BOARD_IN_COLLECTION,
        payload: boardCollection
    };
}