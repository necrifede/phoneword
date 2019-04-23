
const initialState = {
  value: 0
}

export default function value (state = initialState, action) {
  if (isNaN(action.payload)) {
    return state
  }

  switch (action.type) {
    case 'ADD_NUMERIC':
      return {...state, value: Number(`${state.value}${action.payload}`)}
      
    default:
      return state
  }
}
