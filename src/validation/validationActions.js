export const setField = (updates) => ({
    type: 'SET_FIELD',
    updates

});

export const setFormValidity = (isFormValid) => ({
    type: 'SET_FORM_VALIDITY',
    isFormValid
});

export const setLoginErr = (loginErr) => ({
    type: 'SET_LOGIN_ERROR',
    loginErr
});

export const setFetchingStatus = (isFetching) => ({
    type: 'SET_FETCHING_STATUS',
    isFetching
});


