import React from 'react'
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, auth, ...rest}) => (
    <Route {...rest} render={ props => auth.isLoggedIn ? 
        <Component {...props} {...rest} /> :
        <Redirect to={{ pathname:"/login", state: { from: props.location } }} />
    } 
    />
);

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

export default ProtectedRoute;

