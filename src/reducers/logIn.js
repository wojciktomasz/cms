const AUTH_USER = 'auth_user'

export const auth = () => ({
    type: AUTH_USER
})


const initialState = {
    authenticated: false
}


export default function (state = initialState, action = {}) {
    switch(action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true }
        default:
            return state
    }
}