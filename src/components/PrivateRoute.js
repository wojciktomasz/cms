import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = ({ component: Component, userLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    userLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login'
      }}/>
    )
  )}/>
)

export default connect(
  state => ({
    userLoggedIn: state.logIn.userLoggedIn
  })
)(PrivateRoute)
