import Users from '../components/Users'
import { connect } from 'react-redux'

export default connect(
  state => ({
    userToAdd: state.addUser.userToAdd
  }),
  dispatch => ({})
)(Users)