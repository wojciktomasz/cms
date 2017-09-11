import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import LogIn from './components/LogIn'
import MainView from './components/MainView'
import {connect} from 'react-redux'
import {auth} from './reducers/logIn'


export default connect(
    state => ({
        authenticated: state.logIn.authenticated
    }),
    dispatch => ({
        auth: () => dispatch(auth())
    })
)(
    class App extends Component {
        render() {


            const {store} = this.props
            console.log(this.props.authenticated)
            return (
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route exact path="/" component={LogIn}/>
                            <Route path="/main" component={this.props.authenticated ? MainView : LogIn}/>
                        </div>
                    </Router>
                </Provider>
            )
        }
    }
)
