import React, { Component } from 'react';
import {Link} from "react-router-dom";

import '../../../styles/CreateListCard.css';
import {connect} from "react-redux";
import createListInBoard from "../../../actions/CreateListInBoard";

class CreateListCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.createNewListInBoard = this.createNewListInBoard.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value,
        })
    }

    createNewListInBoard(event) {
        event.preventDefault();
        this.props.createListInBoard(this.state.value)
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <div className="create-list-card-wrapper">
                <form onSubmit={this.createNewListInBoard}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Create a group"
                />
                </form>
            </div>
        );
    }
}

export default connect(null, { createListInBoard })(CreateListCard);