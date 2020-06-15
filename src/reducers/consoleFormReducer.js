const defaultState = {
    requestText: '',
    responseText: '',
    errors: [],
    isRequestTextValid: false,
    isSuccess: true
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_FIELDS':
            return action.request;
        case 'UPDATE_FIELDS':
            return {
                ...state,
                ...action.updates
            }
        case 'CLEAR_FIELDS': 
            return defaultState
        default:
            return state;
        
    }
};

