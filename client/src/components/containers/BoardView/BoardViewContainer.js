import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CreateListCard from "./CreateListCard";
import BoardSelectionCard from "../BoardSelection/BoardSelectionCard";

class BoardViewContainer extends Component {

    constructor(props) {
        super(props);
        this.displayAllList = this.displayAllList.bind(this);
    }

    displayAllList() {
        const  {listBoardCollection} = this.props;
        return listBoardCollection.map((item, index) => {
            return (
                <BoardSelectionCard
                    key={item.id} id={item.id} index={index} title={item.title} moveCard={this.moveCard}
                ></BoardSelectionCard>
            );
        });
    }

    render() {
        return (
            <div className="board-view-container-wrapper">
                {this.displayAllList()}
                <CreateListCard/>
            </div>
        );
    }

}

function mapStateToProps({ listBoardCollection }) {
    return {
        listBoardCollection,
    };
};

export default connect(mapStateToProps)(BoardViewContainer);