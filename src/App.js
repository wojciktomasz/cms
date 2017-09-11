import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Routing from './components/Routing'


class App extends Component {
    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <Routing/>
            </Provider>
        )
    }
}

export default App

