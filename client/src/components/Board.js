import React, { Component } from 'react';
import Header from './containers/Header';
import CreateBoardContainer from './containers/BoardSelection/BoardSelectionContainer';

class Board extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <CreateBoardContainer></CreateBoardContainer>
            </div>
        );
    }
}

export default Board;