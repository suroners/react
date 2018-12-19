import {  Route } from 'react-router-dom';
import React, { Redirect } from 'react';



export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (

        (true === true)
        // fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)