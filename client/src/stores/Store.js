import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CreateBoardReducers from "../reducers/CreateBoardReducers";
import BoardCollectionReducer from "../reducers/BoardCollectionReducer";
import ListBoardCollectionReducer from "../reducers/ListBoardCollectionReducers";

const Store = createStore(
    combineReducers({
        createBoard: CreateBoardReducers,
        boardCollection: BoardCollectionReducer,
        listBoardCollection: ListBoardCollectionReducer,
    }, applyMiddleware(thunk))
);

export default Store;