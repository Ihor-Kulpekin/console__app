import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({ isAuth, children, ...otherProps }) => (
    <Route {...otherProps}>
        {
            !isAuth  ? (
                children
            ) : (
                <Redirect to='/app' />
            )
        }
    </Route>
);


const mapStateToProps = state => ({
    isAuth: !!state.auth.user
});

export default connect(mapStateToProps)(PublicRoute);