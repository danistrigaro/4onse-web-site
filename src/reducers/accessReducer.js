const access = (state = {
  isFetching: false,
  didInvalidate: false,
  item: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_ACCESS':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case 'RECEIVE_ACCESS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        item: {
          user: action.user,
          status: null,
          access: action.data.access
        },
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

/*const accessReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ACCESS':
    case 'REQUEST_ACCESS':
      return Object.assign({}, state, {
        [action.user]: access(state[action.user], action)
      })
    default:
      return state
  }
}*/

const accessReducer = (state = {
  isFetching: false,
  didInvalidate: false,
  item: {}
}, action) => {
  switch (action.type) {
    case 'RECEIVE_ACCESS':
    case 'REQUEST_ACCESS':
      return Object.assign({}, state, access(state, action))
    default:
      return state
  }
}

export default accessReducer
