import { v4 as uuidv4 } from 'uuid';
import beautify from 'js-beautify';
import connector from '../apiConnector/apiConnector';
import { updateFields } from './consoleFormActions';
import { isEqual, saveHistory } from '../helpers/helpers';

export const setHistory = (history) => ({
    type: 'SET_HISTORY',
    history
});

export const startRemoveRequest = (id) => {
    return (dispatch, getState) => {
        const user = getState().auth.user;

        dispatch(removeRequest(id));
        saveHistory(user, getState().history);

    };
};

export const removeRequest = (id) => ({
    type: 'REMOVE_REQUEST',
    id
});

export const sendRequest = (request) => {
    return (dispatch, getState) => {

        const user = getState().auth.user;
        const { session } = user;
        const history = getState().history;
        const requestExist = history.find(item => isEqual(JSON.parse(item.requestText), request));
       
        connector.setSession(session);

        return connector.request(request).then(res => {

            if(requestExist) {
                dispatch(
                    updateRequest(requestExist.id, {
                        responseText: JSON.stringify(res),
                        createdAt: Date.now(),
                        isSuccess: true
                    })
                )
            } else {
                dispatch(addRequest({
                    id: uuidv4(),
                    requestText: JSON.stringify(request),
                    responseText: JSON.stringify(res),
                    createdAt: Date.now(),
                    isSuccess: true
                }));
            }

            dispatch(updateFields({
                responseText: beautify(JSON.stringify(res)),
                isSuccess: true
            }));

            saveHistory(user, getState().history);
        }).catch(err => {

            if(requestExist) {
                dispatch(
                    updateRequest(requestExist.id, {
                        responseText: JSON.stringify(err),
                        createdAt: Date.now(),
                        isSuccess: false
                    })
                );
            } else {
                dispatch(addRequest({
                    id: uuidv4(),
                    requestText: JSON.stringify(request),
                    responseText: JSON.stringify(err),
                    createdAt: Date.now(),
                    isSuccess: false
                }));
            }

    
            dispatch(updateFields({
                responseText: beautify(JSON.stringify(err)),
                isSuccess: false
            }));

            saveHistory(user, getState().history);
        });


    };
};

export const sendExistingRequest = (id, request) => {
    return (dispatch, getState) => {

        const user = getState().auth.user;
        const { session } = user;

        connector.setSession(session);

        connector.request(request).then(res => {
            dispatch(updateRequest(id, {
                responseText: JSON.stringify(res),
                createdAt: Date.now(),
                isSuccess: true
            }));

            dispatch(updateFields({
                requestText: beautify(JSON.stringify(request)),
                responseText: beautify(JSON.stringify(res)),
                isSuccess: true
            }));

            saveHistory(user, getState().history);
        }).catch(err => {
            dispatch(updateRequest(id, {
                responseText: JSON.stringify(err),
                createdAt: Date.now(),
                isSuccess: false
            }));

            dispatch(updateFields({
                requestText: beautify(JSON.stringify(request)),
                responseText: beautify(JSON.stringify(err)),
                isSuccess: false
            }))

            saveHistory(user, getState().history);
        });

    };
};

export const addRequest = (request) => ({
    type: 'ADD_REQUEST',
    request
});


export const updateRequest = (id, updates) => ({
    type: 'UPDATE_REQUEST',
    id,
    updates
});

export const startClearHistory = () => {
    return (dispatch, getState) => {
        const { login, sublogin } = getState().auth.user;
        const historyId = sublogin ? `${login}:${sublogin}` : login;

        dispatch(clearHistory());
        localStorage.removeItem(historyId);
        
    };
};

export const clearHistory = () => ({
    type: 'CLEAR_HISTORY'
});