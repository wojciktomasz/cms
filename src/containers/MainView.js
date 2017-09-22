import MainView from '../components/MainView'
import { connect } from 'react-redux'
import { unauth } from '../reducers/logIn'

export default connect(
  null,
  dispatch => ({
    unauth: () => dispatch(unauth())
  })
)(MainView)