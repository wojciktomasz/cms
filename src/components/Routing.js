import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsr } from '../reducers/logIn'

export default connect(
  state => ({
    userLoggedIn: state.logIn.userLoggedIn
  }),
  dispatch => ({
    getUsr: () => dispatch(getUsr())
  })
)(
  class App extends Component {
    render() {
      return (
        <div>
          <Redirect to={this.props.userLoggedIn ? '/main' : '/login'}/>
        </div>
      )
    }
  }
)