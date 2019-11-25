export const REQUEST_CITIES = 'REQUEST_CITIES'
export const requestCities = () => {
    return {
        type: REQUEST_CITIES
    }
}

export const REQUEST_CITIES_SUCCESS = 'REQUEST_CITIES_SUCCESS';
export const requestCitesSuccess = (payload) => {
    return {
        type: REQUEST_CITIES_SUCCESS,
        payload
    }
}

export function fetchCities() {
    return (dispatch) => {
        dispatch(requestCities())
        return fetch('http://localhost:5000/getAllCities')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
          .then(response => response.json())
          .then(json => {dispatch(requestCitesSuccess(json))})
    }
}

/*
function actionCreator(action)
 {  return action;}
fetchCities = () => {
    this.setState({ ...this.state, isFetching: true })
    fetch("http://localhost:5000/getAllCities")
        .then(response => response.json())
        .then(result => this.setState({
            cities: result,
            isFetching: false
        }))
        .catch(e => console.log(e));
}*/