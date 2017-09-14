import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Routing from './components/Routing'
import MainView from './components/MainView'
import LogIn from './components/LogIn'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'


class App extends Component {
  render() {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Routing path='/'/>
            <Route path='/login' component={LogIn}/>
            <Route path='/main' component={MainView}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

