import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from './stores/Store';
import Home from './components/Home';
import Board from './components/Board';

import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/board" component={Board}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
