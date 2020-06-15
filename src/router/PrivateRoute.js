import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PrivateRoute = ({ isAuth, children, ...otherProps }) => (
    <Route {...otherProps}>
        {
            isAuth ? (
                children
            ) : (
                <Redirect to='/' />
            )
        }
    </Route>
);


const mapStateToProps = state => ({
    isAuth: !!state.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);