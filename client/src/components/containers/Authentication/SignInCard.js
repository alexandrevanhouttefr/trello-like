import React, { Component } from 'react';

import '../../../styles/AuthenticationContainer.css';


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

    handleSignIn() {

    }



    render() {
        return (
            <div className="sign-in-card-wrapper">
                <h3>Sign In</h3>
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
                <input type="button" value="Submit" onClick={this.handleSignIn} />
                </form>
            </div>
        );
    }
}

export default SignInCard;