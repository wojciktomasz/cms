import React from 'react'
import { connect } from 'react-redux'
import { unauth } from '../reducers/logIn'
import MainMenu from '../components/MainMenu'

export default connect(
  state => ({}),
  dispatch => ({
    unauth: () => dispatch(unauth())
  })
)(
  class MainView extends React.Component {
    render() {
      return (
        <div>
          <MainMenu/>
          <h1>CMS</h1>
            <button onClick={this.props.unauth}>Log Out</button>
        </div>
      )
    }
  }
)
