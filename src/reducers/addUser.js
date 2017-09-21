import users from '../data/users.json'

const ADD_USER = 'add_user'

export const addUser = data => ({
  type: ADD_USER,
  data
})

const initialState = {
  users,
  userToAdd: null
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userToAdd: action.data
      }
    default:
      return state
  }
}