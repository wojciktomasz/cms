import React from 'react'
import { connect } from 'react-redux'
import { unauth } from '../reducers/logIn'
import MainMenu from '../components/MainMenu'

export default connect(
  null,
  dispatch => ({
    unauth: () => dispatch(unauth())
  })
)(
  class MainView extends React.Component {
    render() {
      return (
        <div>
          <MainMenu logOut={this.props.unauth}/>
          <h1 style={{marginTop: '5%'}}>CMS</h1>
        </div>
      )
    }
  }
)
