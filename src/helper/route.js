import { Redirect, Route } from 'react-router-dom';
import React from 'react';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (rest.isAuth === true)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login'}} />
    )} />
)