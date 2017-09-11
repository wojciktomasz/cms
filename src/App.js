import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import LogIn from './components/LogIn'


class App extends Component {
    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <Router>
                    <Route path='/' component={LogIn}/>
                </Router>
            </Provider>
        )
    }
}

export default App
