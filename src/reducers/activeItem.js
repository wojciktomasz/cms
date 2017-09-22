const ACTIVE_ITEM = 'active_item'
const SET_INITIAL_STATE = 'set_initial_state'

export const setActiveItem = data => ({
  type: ACTIVE_ITEM,
  data
})

export const setInitialState = () => ({
  type: SET_INITIAL_STATE
})

const initialState = {
  activeItem: ''
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.data
      }
    case SET_INITIAL_STATE:
      return {
        ...initialState
      }
    default:
      return state
  }
}