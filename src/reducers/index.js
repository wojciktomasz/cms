import { combineReducers } from 'redux'
import logIn from './logIn'
import errorMessage from './errorMessage'
import activeItem from './activeItem'
import addUser from './addUser'

export default combineReducers({
  logIn,
  errorMessage,
  activeItem,
  addUser
})
