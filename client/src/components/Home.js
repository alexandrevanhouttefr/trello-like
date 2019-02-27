import React, { Component } from 'react';

import Header from './containers/Header';
import AuthenticationContainer from './containers/Authentication/AuthenticationContainer';

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <Header></Header>
                <AuthenticationContainer></AuthenticationContainer>
            </div>
        );
    }
};

export default Home;