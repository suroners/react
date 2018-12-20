import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import { combineActions } from '../store/action/';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'asd',
            password: 'asd',
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit =async  (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        const { login } = this.props;

        if (username && password) {
           const res = await login(username, password);
           res && this.props.history.push("/projects")
        }
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const putActionToProps = (dispatch) => {
    return {
        login: bindActionCreators(combineActions.authentication.login, dispatch)
    }
}

const putStateToProps = (state) => {
    const { authentication } = state;
    return {
        authentication: authentication
    };
}

const connectedLoginPage = connect(putStateToProps, putActionToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
