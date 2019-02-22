import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CreateBoard from './BoardCreation/CreateBoard';
import CreateBoardForm from './BoardCreation/CreateBoardForm';
import BoardSelectionCard from "./BoardSelectionCard";

class BoardSelectionContainer extends Component {

    constructor(props) {
        super(props);
        this.displayAllBoard = this.displayAllBoard.bind(this);
    }

    displayAllBoard() {
        const { boardCollection } = this.props;
        return boardCollection.map((item) => {
            return (
                <BoardSelectionCard
                    key={item.id} title={item.title}
                ></BoardSelectionCard>
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

BoardSelectionContainer.propTypes = {
    newBoard: PropTypes.object
};

function mapStateToProps({ createBoard, boardCollection }) {
    return {
        createBoard,
        boardCollection
    };
};

export default connect(mapStateToProps)(BoardSelectionContainer);