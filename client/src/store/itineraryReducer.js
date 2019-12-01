import { REQUEST_ITINERARIES , REQUEST_ITINERARIES_SUCCESS } from './actions/itineraryActions'
const defaultState = {
    itineraries: [],
    isFetching: false,
};

const itinerariesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ITINERARIES:
            return {
                ...state,
                isFetching: true
            };
        case REQUEST_ITINERARIES_SUCCESS:
            return {
                ...state,
                itineraries: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default itinerariesReducer;