export const REQUEST_USERS = 'REQUEST_USERS'
export const requestUsers = () => {
    return {
        type: REQUEST_USERS
    }
}

export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const requestUserSuccess = (payload) => {
    return {
        type: REQUEST_USERS_SUCCESS,
        payload
    }
}

export function fetchUsers(user) {
    return (dispatch) => {
        dispatch(requestUsers())
        return fetch('http://localhost:5000/postUsers', {method: 'POST',  
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
          .then(response => response.json())
          .then(json => {dispatch(requestUserSuccess(json))})
    }
}