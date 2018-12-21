import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import './App.css';
import {LoginPage} from "./components/authentication";
import {Projects} from "./components/projects";
import {Project} from "./components/add_edit_project";
import { PrivateRoute } from "./helper/route";


const history = createBrowserHistory();

class App extends React.Component {
    render() {
        const { user_token } = this.props;
        return (
            <Router history={history}>
                <div className="col-md-12">
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute  path="/projects" component={Projects}  isAuth={user_token ? true : false} />
                    <PrivateRoute  path="/project/:project_id?" component={Project}  isAuth={user_token ? true : false} />
                </div>
            </Router>
        );
    }
}

const putStateToProps = (state) => {
    const { user_token } = state.authentication;
    return {
        user_token: user_token
    };
}
const connectedApp = connect(putStateToProps)(App);
export { connectedApp as App };