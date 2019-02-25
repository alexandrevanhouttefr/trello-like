import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import update from 'immutability-helper';

import CreateBoard from './BoardCreation/CreateBoard';
import CreateBoardForm from './BoardCreation/CreateBoardForm';
import BoardSelectionCard from "./BoardSelectionCard";

import updatePositionBoardInCollection from '../../../actions/UpdatePositionBoardInCollection';


import '../../../styles/BoardSelectionContainer.css';


class BoardSelectionContainer extends Component {

    constructor(props) {
        super(props);
        /*this.state = {
            boardCollection: this.props.boardCollection,
        };*/
        this.displayAllBoard = this.displayAllBoard.bind(this);
        this.moveCard = this.moveCard.bind(this);
    }


    swapArrayElements(arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    };

    moveCard = (dragIndex, hoverIndex) => {
        var { boardCollection } = this.props;
        const dragCard = boardCollection
            [dragIndex];

        this.swapArrayElements(boardCollection, dragIndex, hoverIndex);
        this.props.updatePositionBoardInCollection(boardCollection);
        this.forceUpdate();
        //boardCollection = boardCollection.splice([[dragIndex, 1], [hoverIndex, 0, dragCard]]);

        /*this.setState(
            update(this.state, {
                boardCollection: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )*/
    }

    displayAllBoard() {
        const { boardCollection } = this.props;
        return boardCollection.map((item, index) => {
            return (
                <BoardSelectionCard
                    key={item.id} id={item.id} index={index} title={item.title} moveCard={this.moveCard}
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

/*CreateBoard.propTypes = {
    updatePositionBoardInCollection: PropTypes.func.isRequired,
};*/    

function mapStateToProps({ createBoard, boardCollection }) {
    return {
        createBoard,
        boardCollection,
    };
};

export default connect(mapStateToProps, {updatePositionBoardInCollection})(BoardSelectionContainer);