import React, { Component } from 'react';

import '../../../styles/AuthenticationContainer.css';


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
    }


    render() {
        return (
            <div className="sign-up-card-wrapper">
                <h3>Sign Up</h3>
                <form>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.usernameValue}
                            onChange={this.handleChangeUsernameValue}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="text"
                            value={this.state.passwordValue}
                            onChange={this.handleChangePasswordValue}
                        />
                    </label>
                    <label>
                        Password Confirmation:
                        <input
                            type="text"
                            value={this.state.passwordConfirmationValue}
                            onChange={this.handleChangePasswordConfirmationValue}
                        />
                    </label>
                    <input type="button" value="Submit" onClick={this.handleSignUp} />
                </form>
            </div>
        );
    }
};

export default SignUpCard;