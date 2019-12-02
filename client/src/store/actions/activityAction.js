export const REQUEST_ACTIVITIES = 'REQUEST_ACTIVITIES'
export const requestActivities = () => {
    return {
        type: REQUEST_ACTIVITIES
    }
}

export const REQUEST_ACTIVITIES_SUCCESS = 'REQUEST_ACTIVITIES_SUCCESS';
export const requestActivitiesSuccess = (payload) => {
    return {
        type: REQUEST_ACTIVITIES_SUCCESS,
        payload
    }
}

export function fetchActivities(city,title) {
    console.log('title ', title);
    return (dispatch) => {
        dispatch(requestActivities())

        // TODO FIX
        return fetch('http://localhost:5000/getAllActivities/'+ city + '/' + title)
        
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
          .then(response => response.json())
          .then(json => {dispatch(requestActivitiesSuccess(json))})
    }
}