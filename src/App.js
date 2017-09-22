import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import MainView from './containers/MainView'
import LogIn from './containers/LogIn'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Authorization from './containers/Authorization'

class App extends Component {
  render() {

    const {store} = this.props

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Authorization path='/'/>
            <Route exact path='/login' component={LogIn}/>
            <Route path='/main' component={PrivateRoute(MainView)}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

