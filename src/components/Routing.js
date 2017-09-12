import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import LogIn from '../components/LogIn'
import MainView from '../components/MainView'
import {connect} from 'react-redux'
import {auth, getUsr} from '../reducers/logIn'

export default connect(
    state => ({
        authenticated: state.logIn.authenticated,
        userLoggedIn: state.logIn.userLoggedIn
    }),
    dispatch => ({
        auth: () => dispatch(auth()),
        getUsr: () => dispatch(getUsr())
    })
)(
    class App extends Component {
        render() {
            console.log(this.props.authenticated)
            return (
                <div>
                    <Route exact path="/" component={this.props.userLoggedIn ? MainView : LogIn}/>
                    <Route path="/main" component={this.props.userLoggedIn ? MainView : LogIn}/>
                </div>
            )
        }
    }
)