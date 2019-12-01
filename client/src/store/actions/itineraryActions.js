export const REQUEST_ITINERARIES = 'REQUEST_ITINERARIES'
export const requestItineraries = () => {
    return {
        type: REQUEST_ITINERARIES
    }
}

export const REQUEST_ITINERARIES_SUCCESS = 'REQUEST_ITINERARIES_SUCCESS';
export const requestItinerariesSuccess = (payload) => {
    return {
        type: REQUEST_ITINERARIES_SUCCESS,
        payload
    }
}

export function fetchItineraries(city) {
    return (dispatch) => {
        dispatch(requestItineraries())

        // TODO FIX
        return fetch('http://localhost:5000/getAllItineraries/'+ city)
        
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
          .then(response => response.json())
          .then(json => {dispatch(requestItinerariesSuccess(json))})
    }
}