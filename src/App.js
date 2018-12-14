import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import './App.css';
import {LoginPage} from "./components/authentication";


const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
        <Router history={history}>
            <div>
                {/*<PrivateRoute exact path="/" component={HomePage} />*/}
                <Route path="/login" component={LoginPage} />
            </div>
        </Router>
    );
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };