import users from '../data/users.json'

const AUTH_USER = 'auth_user'
const UNAUTH_USER = 'unauth_user'
const GET_USER = 'get_user'
const GET_ERROR = 'get_error'

export const auth = () => ({
    type: AUTH_USER
})

export const unauth = () => ({
    type: UNAUTH_USER
})

export const getUsr = data => ({
    type: GET_USER,
    data
})

export const getError = data => ({
    type: GET_ERROR,
    data
})

const initialState = {
    users,
    authenticated: false,
    userLoggedIn: null,
    errorMessage: null
}

console.log(getError())

export default function (state = initialState, action = {}) {
    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true
            }
        case UNAUTH_USER:
            return {
                ...state,
                userLoggedIn: null
            }
        case GET_USER:
            return {
                ...state,
                userLoggedIn: action.data
            }
        case GET_ERROR:
            return {
                ...state,
                errorMessage: action.data
            }
        default:
            return state
    }
}
