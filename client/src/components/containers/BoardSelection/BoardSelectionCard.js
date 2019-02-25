import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
//import { DragSource } from 'react-dnd';

import {
    DragSource,
    DropTarget,
    ConnectDropTarget,
    ConnectDragSource,
    DropTargetMonitor,
    DropTargetConnector,
    DragSourceConnector,
    DragSourceMonitor,
} from 'react-dnd';
import { findDOMNode } from 'react-dom'
import flow from 'lodash/flow';

import '../../../styles/BoardSelectionCard.css';

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
}

const cardTarget = {
    hover(props, monitor, component) {
        if (!component) {
            return null
        }
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return
        }
        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }
        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex)

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex
    },
}

function connectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function connectTarget(connect) {
    return {
        connectDragTarget: connect.dropTarget(),
    }
}

class BoardSelectionCard extends Component {


    render() {

        const { isDragging, connectDragSource, connectDragTarget } = this.props;
        const opacity = isDragging ? 0 : 1;

        return (

            connectDragSource(
                connectDragTarget(
                    <div className="board-selection-card-wrapper" key={this.props.id} style={{opacity}}>
                        {this.props.title}
                    </div>
                )
            )
        );

 /*       return (
     //       <Link to={'boardDetails/' + this.props.id}>
     //       </Link>
       );*/
    }
};

export default flow(DragSource('board-selection-card-wrapper', cardSource, connectSource),
    DropTarget('board-selection-card-wrapper', cardTarget, connectTarget))
    (BoardSelectionCard);