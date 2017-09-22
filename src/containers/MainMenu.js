import MainMenu from '../components/MainMenu'
import { connect } from 'react-redux'
import { setActiveItem } from '../reducers/activeItem'
import { withRouter } from 'react-router-dom'
import { setInitialState } from '../reducers/activeItem'
import { unauth } from '../reducers/logIn'

export default connect(
  state => ({
    activatedItem: state.activeItem.activeItem
  }),
  dispatch => ({
    activeItem: data => dispatch(setActiveItem(data)),
    setInitialState: () => dispatch(setInitialState()),
    unauth: () => dispatch(unauth())
  })
)(withRouter(MainMenu))