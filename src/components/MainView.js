import React from 'react'
import { connect } from 'react-redux'
import { unauth } from '../reducers/logIn'
import { Link } from 'react-router-dom'

export default connect(
    state => ({}),
    dispatch => ({
        unauth: () => dispatch(unauth())
    })
)(
    class MainView extends React.Component {

        render() {
            console.log(this.props.authenticated)

            return (
                <div>
                    <h1>CMS</h1>
                    <Link to="/">
                    <button onClick={this.props.unauth}>Log Out</button>
                    </Link>
                </div>
            )
        }
    }
)
