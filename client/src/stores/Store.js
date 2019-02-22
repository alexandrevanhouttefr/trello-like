import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import CreateBoardReducers from "../reducers/CreateBoardReducers";
import BoardCollectionReducer from "../reducers/BoardCollectionReducer";

const Store = createStore(
    combineReducers({
        createBoard: CreateBoardReducers,
        boardCollection: BoardCollectionReducer,
    }, applyMiddleware(thunk))
);

export default Store;