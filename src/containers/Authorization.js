import Authorization from '../components/Authorization'
import { connect } from 'react-redux'

export default connect(
  state => ({
    userLoggedIn: state.logIn.userLoggedIn
  }),
  null
)(Authorization)