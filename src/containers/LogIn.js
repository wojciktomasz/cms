import { getUsr } from '../reducers/logIn'
import { getError } from '../reducers/errorMessage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LogIn from '../components/LogIn'

export default connect(
  state => ({
    errorMessage: state.errorMessage.message
  }),
  dispatch => ({
    getUsr: data => dispatch(getUsr(data)),
    getError: data => dispatch(getError(data))
  })
)(withRouter(LogIn))