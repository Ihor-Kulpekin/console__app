import getSortedRequests from '../selectors/requests';

export default (state = [], action) => {
    switch(action.type) {
        case 'SET_HISTORY':
            return action.history;
        case 'REMOVE_REQUEST':
            return state.filter(request => request.id !== action.id);
        case 'ADD_REQUEST':
            return [
                ...getSortedRequests(state).slice(0, 14),
                action.request
            ];
        case 'UPDATE_REQUEST': 
            return state.map(request => {
                if(request.id === action.id) {
                    return {
                        ...request,
                        ...action.updates
                    }
                } else {
                    return request;
                }
            });
        case 'CLEAR_HISTORY': 
            return [];
        default: 
            return state;
    }
}