const GET_ERROR = 'get_error'

export const getError = data => ({
  type: GET_ERROR,
  data
})

const initialState = {
  message: null
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        message: action.data
      }
    default:
      return state
  }
}