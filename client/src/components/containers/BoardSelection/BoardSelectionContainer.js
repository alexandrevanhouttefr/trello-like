import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import CreateBoard from './BoardCreation/CreateBoard';
import CreateBoardForm from './BoardCreation/CreateBoardForm';
import BoardSelectionCard from "./BoardSelectionCard";

import updatePositionBoardInCollection from '../../../actions/UpdatePositionBoardInCollection';


import '../../../styles/BoardSelectionContainer.css';


class BoardSelectionContainer extends Component {

    constructor(props) {
        super(props);
        this.displayAllBoard = this.displayAllBoard.bind(this);
        this.moveCard = this.moveCard.bind(this);
    }

    componentWillMount() {
        if (this.props.authentication.token === '') {
            this.props.history.push('/');
        }
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


function mapStateToProps({ createBoard, boardCollection, authentication }) {
    return {
        createBoard,
        boardCollection,
        authentication
    };
};

export default withRouter(connect(mapStateToProps, {updatePositionBoardInCollection})(BoardSelectionContainer));