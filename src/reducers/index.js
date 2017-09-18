import { combineReducers } from 'redux'
import logIn from './logIn'
import errorMessage from './errorMessage'
import activeItem from './activeItem'

export default combineReducers({
  logIn,
  errorMessage,
  activeItem
})
