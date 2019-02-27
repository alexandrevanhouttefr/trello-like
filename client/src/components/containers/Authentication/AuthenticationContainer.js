import React, { Component } from 'react';

import SignInCard from './SignInCard';
import SignUpCard from './SignUpCard';

import '../../../styles/AuthenticationContainer.css';

class AuthenticationContainer extends Component {

    render() {
        return (
            <div className="authentication-container-wrapper">
                <SignUpCard/>
                <SignInCard/>
            </div>
        );
    };
}

export default AuthenticationContainer;