import React from 'react'
import { Redirect } from 'react-router-dom'

class Authorization extends React.Component {
  render() {
    return (
      <div>
        {this.props.userLoggedIn ? <Redirect to='/main'/> : <Redirect to='/login'/>}
      </div>
    )
  }
}

export default Authorization