import AddUsers from '../components/AddUsers'
import { connect } from 'react-redux'
import { addUser } from '../reducers/addUser'
import { getError } from '../reducers/errorMessage'

export default connect(
  state => ({
    errorMessage: state.errorMessage.message,
    userToAdd: state.addUser.userToAdd
  }),
  dispatch => ({
    addUser: data => dispatch(addUser(data)),
    getError: data => dispatch(getError(data))
  })
)(AddUsers)