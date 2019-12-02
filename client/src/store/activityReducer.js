import { REQUEST_ACTIVITIES , REQUEST_ACTIVITIES_SUCCESS } from './actions/activityAction'
const defaultState = {
    activities: [],
    isFetching: false,
};

const activitiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ACTIVITIES:
            return {
                ...state,
                isFetching: true
            };
        case REQUEST_ACTIVITIES_SUCCESS:
            return {
                ...state,
                activities: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default activitiesReducer;