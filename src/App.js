import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import './App.css';
import {LoginPage} from "./components/authentication";
import {Projects} from "./components/projects";
import {EditProject} from "./components/editProject";
import { PrivateRoute } from "./helper/route";
import {AddProject} from "./components/addProject";


const history = createBrowserHistory();

class App extends Component {
    render() {
        const { userToken } = this.props;
        return (
            <Router history={history}>
                <div className="col-md-12">
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute  path="/projects" component={Projects}  isAuth={!!userToken} />
                    <PrivateRoute  path="/project/edit/:projectId?" component={EditProject}  isAuth={!!userToken} />
                    <PrivateRoute  path="/project/add" component={AddProject}  isAuth={!!userToken} />
                </div>
            </Router>
        );
    }
}

const putStateToProps = (state) => {
    const { userToken } = state.authentication;
    return {
        userToken: userToken
    };
};
const connectedApp = connect(putStateToProps)(App);
export { connectedApp as App };