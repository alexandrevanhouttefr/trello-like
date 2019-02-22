import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CreateBoard from './CreateBoard';
import CreateBoardForm from './CreateBoardForm';

class CreateBoardContainer extends Component {

    constructor(props) {
        super(props);
        this.displayAllBoard = this.displayAllBoard.bind(this);
    }

    displayAllBoard() {
        const { boardCollection } = this.props;
        return boardCollection.map((item) => {
            return (
                <div className="board" key={item.id}>
                    {item.title}
                </div>
            );
        })
    }

    render() {
        const { createBoard } = this.props;
        return (
            <div className="create-board-container-wrapper">
                { !createBoard.isBoardOpen ?
                    <CreateBoard /> :
                    <CreateBoardForm />
                }
                { this.displayAllBoard() }
            </div>
        );
    }
};

CreateBoardContainer.propTypes = {
    newBoard: PropTypes.object
};

function mapStateToProps({ createBoard, boardCollection }) {
    return {
        createBoard,
        boardCollection
    };
};

export default connect(mapStateToProps)(CreateBoardContainer);