import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import CreateBoardReducers from "../reducers/CreateBoardReducers";
import BoardCollectionReducer from "../reducers/BoardCollectionReducer";
import ListBoardCollectionReducer from "../reducers/ListBoardCollectionReducers";
import AuthenticationReducers from "../reducers/AuthenticationReducers";

const Store = createStore(
    combineReducers({
        createBoard: CreateBoardReducers,
        boardCollection: BoardCollectionReducer,
        listBoardCollection: ListBoardCollectionReducer,
        authentication: AuthenticationReducers,
    }, applyMiddleware(thunk))
);

export default Store;