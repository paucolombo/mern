import { REQUEST_CITIES , REQUEST_CITIES_SUCCESS } from './actions/cityActions'
const defaultState = {
    cities: [],
    isFetching: false,
};

const citiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_CITIES:
            return {
                ...state,
                isFetching: true
            };
        case REQUEST_CITIES_SUCCESS:
            return {
                ...state,
                cities: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default citiesReducer;