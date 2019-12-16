import { REQUEST_USERS , REQUEST_USERS_SUCCESS } from './actions/userActions'
const defaultState = {
    user: {},
    isFetching: false,
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                isFetching: true
            };
        case REQUEST_USERS_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default usersReducer;