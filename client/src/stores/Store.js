import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import CreateBoardReducers from "../Reducers/CreateBoardReducers";
import BoardCollectionReducer from "../Reducers/BoardCollectionReducer";

const Store = createStore(
    combineReducers({
        createBoard: CreateBoardReducers,
        boardCollection: BoardCollectionReducer,
    }, applyMiddleware(thunk))
);

export default Store;