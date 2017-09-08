import { createStore } from 'redux'
import reducers from '../reducers'

export default intialState => {
    return createStore(
        reducers,
        initialState
    )
}