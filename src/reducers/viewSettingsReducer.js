const defaultViewSettings = {
    isFullScreen: false,
    requestFieldWidth: 'calc(50% - 1rem)'
}

export default (state = defaultViewSettings, action) => {
    switch (action.type) {
        case 'TOGGLE_SCREEN_MODE':
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        case 'SET_FIELD_WIDTH': 
            return {
                ...state,
                requestFieldWidth: action.requestFieldWidth
            }
        case 'RESET_SETTINGS':
            return defaultViewSettings;
        default:
            return state;
    } 
}; 