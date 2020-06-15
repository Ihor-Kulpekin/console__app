export const setFields = (request) => ({
    type: 'SET_FIELDS',
    request
});

export const updateFields = (updates) => ({
    type: 'UPDATE_FIELDS',
    updates
});

export const clearFields = () => ({
    type: 'CLEAR_FIELDS'
});