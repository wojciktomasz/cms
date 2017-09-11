import users from '../data/users.json'

const AUTH_USER = 'auth_user'
const UNAUTH_USER = 'unauth_user'

export const auth = () => ({
    type: AUTH_USER
})

export const unauth = () => ({
    type: UNAUTH_USER
})


const initialState = {
    users,
    authenticated: false
}


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
                authenticated: false
            }
        default:
            return state
    }
}