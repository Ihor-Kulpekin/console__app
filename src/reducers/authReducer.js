const defaultState = {
    user: null
}; 

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                user: action.user
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state;
    }
};