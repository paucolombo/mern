

export const REQUEST_CITIES = 'REQUEST_CITIES'
export const requestCities = {
    type: REQUEST_CITIES
}

export const REQUEST_CITIES_SUCCESS = 'REQUEST_CITIES_SUCCESS';
export const requestCitesSuccess = (payload) => {
    type: REQUEST_CITIES_SUCCESS,
    payload
}

export function fetchCities() {
    return function(dispatch) {
        dispatch(requestCities())

        return fetch('http://localhost:5000/getAllCities')
          .then(response => response.json())
          .then(json => dispatch(requestCitesSuccess(json)))
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