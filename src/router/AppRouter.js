import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import ConsolePage from '../pages/ConsolePage/ConsolePage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';




const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact={true}>
                    <LoginPage />
                </PublicRoute>
                <PrivateRoute path="/console">
                    <ConsolePage />
                </PrivateRoute>
                <Route >
                    <NotFoundPage />
                </Route>
            </Switch>
    </BrowserRouter>
);

export default AppRouter;