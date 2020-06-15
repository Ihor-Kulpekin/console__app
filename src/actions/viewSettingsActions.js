export const toggleScreenMode = () => ({
    type: 'TOGGLE_SCREEN_MODE'
});

export const saveSettings = (settings = {}) => {
    return (dispatch) => {
        const { requestFieldWidth = 'calc(50% - 1rem)' } = settings;

        localStorage.setItem('viewSettings', JSON.stringify({ requestFieldWidth }));

        dispatch(setFieldWidth(requestFieldWidth));
    }
};

export const setFieldWidth = (requestFieldWidth) => ({
    type: 'SET_FIELD_WIDTH',
    requestFieldWidth
});

export const deleteSettings = () => {
    return (dispatch) => {
        localStorage.removeItem('viewSettings');

        dispatch(resetSettings());
    }
}; 

export const resetSettings = () => ({
    type: 'RESET_SETTINGS'
});