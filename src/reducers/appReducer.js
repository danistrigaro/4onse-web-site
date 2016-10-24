const appReducer = (state = [], action) => {
  switch (action.type) {
    case 'WINDOW_RESIZE':
      return [
        ...state,
        {
          height: action.data.height,
          width: action.data.width
        }
      ]
    default:
      return state
  }
}

export default appReducer
