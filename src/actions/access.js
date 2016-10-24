import axios from 'axios'

// function fired on login

export const requestAccess = (user) => {
  return {
    type: 'REQUEST_ACCESS',
    user
  }
}

export const receiveAccess = (user, data) => {
  return {
    type: 'RECEIVE_ACCESS',
    user: user,
    data: data,
    receivedAt: Date.now()
  }
}

export const fetchAccess = (user, password, dispatch) => {
  dispatch(requestAccess(user))
  return axios.post('/auth/login/', {
    username: user,
    password: password
  })
  .then(function (response) {
    return dispatch(receiveAccess(user, response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
}

/*export const getAccess = (user, password, dispatch) => {
  axios.post('/auth/login/', {
    username: user,
    password: password
  })
  .then(function (response) {
    return dispatch({
      type: 'ACCESS_RESPONSE',
      data: response.data
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}
*/
