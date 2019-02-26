import React, {Component} from 'react';
import { connect } from 'react-redux';

import CardHeader from '../../Card/CardHeader';
import submitNewBoard from '../../../../actions/SubmitNewBoard';
import CreateNewBoard from '../../../../actions/CreateNewBoard';

import '../../../../styles/CreateBoardForm.css';

class CreateBoardForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitNewBoard = this.submitNewBoard.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    submitNewBoard() {
        this.props.submitNewBoard(this.state.value);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <div className="create-board-form-wrapper">
                <CardHeader title="Create a new board" />
                <div className="body">
                    <form onSubmit={this.submitNewBoard}>
                        <label>
                            Name of the group:
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                        <input type="button" value="Submit" onClick={this.submitNewBoard} />
                    </form>
                </div>
            </div>
        );
    }
};

export default connect(null, { submitNewBoard })(CreateBoardForm);