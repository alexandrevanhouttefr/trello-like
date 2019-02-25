import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Store from './stores/Store';
import Home from './components/Home';
import Board from './components/Board';
import BoardDetails from './components/BoardDetails';

import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/board/:id" component={BoardDetails} />
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
