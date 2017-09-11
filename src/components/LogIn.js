import React from 'react'
import { auth }from '../reducers/logIn'
import { connect } from 'react-redux'


export default connect(
    state => ({
        authenticated: state.logIn.authenticated
    }),
    dispatch => ({
        auth: () => dispatch(auth())
    })
)(
    class LogIn extends React.Component {


    render() {
        console.log(this.props.authenticated)

        return (
            <div>
                <button onClick={this.props.auth}>Sign Up</button>
            </div>
        )
    }
}
)
