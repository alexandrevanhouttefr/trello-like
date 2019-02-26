import React, { Component } from 'react';
import Header from './containers/Header';

import BoardViewContainer from './containers/BoardView/BoardViewContainer';

class BoardDetails extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <BoardViewContainer></BoardViewContainer>
            </div>
        );
    }
}

export default BoardDetails;