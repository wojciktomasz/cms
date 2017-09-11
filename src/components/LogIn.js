import React from 'react'
import { auth }from '../reducers/logIn'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export default connect(
    state => ({}),
    dispatch => ({
        auth: () => dispatch(auth())
    })
)(
    class LogIn extends React.Component {


    render() {
        return (
            <div>
                <Link to="/main">
                    <button onClick={this.props.auth}>Log in</button>
                </Link>
            </div>
        )
    }
}
)
