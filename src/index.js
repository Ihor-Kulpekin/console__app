import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import connector from './apiConnector/apiConnector';
import configStore from './store/configStore';
import { logIn, logOut } from './actions/authActions';
import { loadHistory } from './helpers/helpers';
import { loadSettings } from './helpers/helpers';
import { setHistory } from './actions/historyActions';
import { setFieldWidth } from './actions/viewSettingsActions';
import AppRouter from './router/AppRouter';
import LoaderPage from './pages/LoaderPage/LoaderPage';

import 'normalize.css';
import './styles/scss/main.scss';


const rootEl = document.getElementById('root');

ReactDOM.render(<LoaderPage />, rootEl);

const store = configStore();

const app = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

const renderApp = () => {
    ReactDOM.render(app, rootEl);
};

const currentUser = JSON.parse(localStorage.getItem('sendsay_user'));

if(currentUser) {

    connector.setSession(currentUser.session);

    connector.request({
        action: 'pong'
    }).then(res => {

        const history = loadHistory(currentUser);
        const settings = loadSettings();

        store.dispatch(logIn(currentUser));
        store.dispatch(setHistory(history));
        
        if(settings && settings.requestFieldWidth) {
            store.dispatch(setFieldWidth(settings.requestFieldWidth));
        }

        renderApp();
    }).catch(err => {

        localStorage.removeItem('sendsay_user');

        connector.setSession(undefined);

        store.dispatch(logOut());

        renderApp();
    });
} else {
    store.dispatch(logOut());
    renderApp();
}
