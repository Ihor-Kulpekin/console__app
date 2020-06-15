import { combineReducers } from 'redux';

import authReducer from './authReducer';
import viewSettingsReducer from './viewSettingsReducer';
import historyReducer from './historyReducer';
import consoleFormReducer from './consoleFormReducer';

export default combineReducers({
    auth: authReducer,
    viewSettings: viewSettingsReducer,
    history: historyReducer,
    consoleForm: consoleFormReducer
});