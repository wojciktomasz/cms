import React from 'react'
import { connect } from 'react-redux'
import { unauth } from '../reducers/logIn'

export default connect(
    state => ({
        authenticated: state.logIn.authenticated
    }),
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
                    <button onClick={this.props.unauth}>Log Out</button>
                </div>
            )
        }
    }
)
