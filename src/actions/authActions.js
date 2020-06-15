import connector from '../apiConnector/apiConnector';
import { setHistory, clearHistory } from '../actions/historyActions';
import { clearFields } from '../actions/consoleFormActions';
import { loadHistory } from '../helpers/helpers';
import { deleteSettings } from '../actions/viewSettingsActions';

const startLogIn = (auth = {}) => {
    return (dispatch) => {
       const { sublogin } = auth;

       connector.auth = auth;

       return connector.request({
           action: 'pong'
       }).then(res => {

            const currentUser = {
                login: res.account,
                sublogin,
                session: connector.session
            }; 

            localStorage.setItem('sendsay_user', JSON.stringify(currentUser));

            const history = loadHistory(currentUser);
            
            dispatch(logIn(currentUser));
            dispatch(setHistory(history));
       });
    }
};

const logIn = (user) => ({
    type: 'LOGIN',
    user
});

const startLogOut = () => {
    return (dispatch, getState) => {

        const { session } = getState().auth.user;

        connector.setSession(session);

        return connector.request({
            action: 'logout'
        }).then((res) => {
            connector.setSession(undefined);
            connector.auth = undefined;
            localStorage.removeItem('sendsay_user');
            dispatch(clearHistory());
            dispatch(clearFields());
            dispatch(deleteSettings());
            dispatch(logOut());
        });

    }
};

const logOut = () => ({
    type: 'LOGOUT'
});

export { startLogIn, logIn, startLogOut, logOut };