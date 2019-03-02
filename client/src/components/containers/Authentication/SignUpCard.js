import React, { Component } from 'react';
import {connect} from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {signUp} from "../../../actions/SignUp";

import '../../../styles/AuthenticationContainer.css';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class SignUpCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            passwordValue: '',
            passwordConfirmationValue: '',
        }
        this.handleChangeUsernameValue = this.handleChangeUsernameValue.bind(this);
        this.handleChangePasswordValue = this.handleChangePasswordValue.bind(this);
        this.handleChangePasswordConfirmationValue = this.handleChangePasswordConfirmationValue.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChangeUsernameValue(e) {
        this.setState({
            usernameValue: e.target.value,
        });
    }

    handleChangePasswordValue(e) {
        this.setState({
            passwordValue: e.target.value,
        });
    }

    handleChangePasswordConfirmationValue(e) {
        this.setState({
            passwordConfirmationValue: e.target.value,
        });
    }

    handleSignUp(e) {
        e.preventDefault();
        this.props.signUp(
            this.state.usernameValue,
            this.state.passwordValue,
            this.state.passwordConfirmationValue
        );
    }


    render() {
        return (
            <div className="sign-up-card-wrapper">
                <h3>Sign Up</h3>
                <form>
                    <TextField
                        label="Username"
                        value={this.state.usernameValue}
                        onChange={this.handleChangeUsernameValue}
                    /><br />
                    <TextField
                        label="Password"
                        value={this.state.passwordValue}
                        onChange={this.handleChangePasswordValue}
                    /><br />
                    <TextField
                        label="Password confirmation"
                        value={this.state.passwordConfirmationValue}
                        onChange={this.handleChangePasswordConfirmationValue}
                    /><br />
                    <Button variant="contained" color="primary" value="Submit" onClick={this.handleSignIn}>
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return ({
        signUp: (username, password) => {
            signUp(username, password)(dispatch);
        }
    })
}

function mapStateToProps({}) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUpCard));