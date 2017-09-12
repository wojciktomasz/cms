import users from '../data/users.json'

const UNAUTH_USER = 'unauth_user'
const GET_USER = 'get_user'

export const unauth = () => ({
    type: UNAUTH_USER
})

export const getUsr = data => ({
    type: GET_USER,
    data
})

const initialState = {
    users,
    userLoggedIn: null
}

export default function (state = initialState, action = {}) {
    switch(action.type) {
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
        default:
            return state
    }
}
