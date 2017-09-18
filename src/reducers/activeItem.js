const ACTIVE_ITEM = 'active_item'

export const setActiveItem = data => ({
  type: ACTIVE_ITEM,
  data
})

const initialState = {
  activeItem: 'dashboard'
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.data
      }
    default:
      return state
  }
}