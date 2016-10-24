// redux
import { combineReducers } from 'redux'
import appReducer from './appReducer'
import accessReducer from './accessReducer'

const appReducers = combineReducers({
  appReducer,
  accessReducer
})

export default appReducers
