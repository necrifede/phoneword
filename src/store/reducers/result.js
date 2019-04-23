
const initialState = {
  text: "",
  list: [],
}

export default function result (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {...state, list: action.payload}
    
    case 'SELECT_RESULT':
      return {...state, text: action.payload}
  
    default:
      return state;
  }
}
