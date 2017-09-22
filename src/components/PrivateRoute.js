import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


export default function (ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.userLoggedIn) {
        this.props.history.push("/login")
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.userLoggedIn) {
        this.props.history.push("/login")
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(
    state => ({
      userLoggedIn: state.logIn.userLoggedIn
    }))(withRouter(Authentication))
}