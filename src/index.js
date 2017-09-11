import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import createStore from "./store/createStore"
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore({})


ReactDOM.render((
    <Router>
        <App store={store}/>
    </Router>
        ), document.getElementById('root'))
registerServiceWorker()

