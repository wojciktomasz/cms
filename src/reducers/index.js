import { combineReducers } from 'redux'
import logIn from './logIn'
import errorMessage from './errorMessage'

export default combineReducers({
  logIn,
  errorMessage
})
