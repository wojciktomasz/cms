import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default connect(
  state => ({
    userLoggedIn: state.logIn.userLoggedIn
  }),null
)(
  class Routing extends Component {
    render() {
      return (
        <div>
          <Redirect to={this.props.userLoggedIn !== null ? '/main' : '/login'}/>
        </div>
      )
    }
  }
)