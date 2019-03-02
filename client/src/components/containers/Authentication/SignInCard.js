import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../styles/AuthenticationContainer.css';
import {connect} from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {signIn} from "../../../actions/SignIn";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class SignInCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            passwordValue: '',
        }
        this.handleChangeUsernameValue = this.handleChangeUsernameValue.bind(this);
        this.handleChangePasswordValue = this.handleChangePasswordValue.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
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

    handleSignIn(e) {
        e.preventDefault();
        this.props.signIn(this.state.usernameValue, this.state.passwordValue)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authentication.token !== '') {
            this.props.history.push('/board');
        }
    }

    render() {
        return (
            <div className="sign-in-card-wrapper">
                <h3>Sign In</h3>
                <form>
                    <TextField
                        label="Username"
                        value={this.state.usernameValue}
                        onChange={this.handleChangeUsernameValue}
                    /><br />
                    <TextField
                        label="password"
                        value={this.state.passwordValue}
                        onChange={this.handleChangePasswordValue}
                    /><br />
                    <Button variant="contained" color="primary" value="Submit" onClick={this.handleSignIn}>
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        signIn: (username, password) => {
            signIn(username, password)(dispatch);
        }
    })
}

function mapStateToProps({ authentication }) {
    return {
        authentication,
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInCard)));