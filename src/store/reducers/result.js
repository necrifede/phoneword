
const initialState = {
  text: "",
  list: [],
}

export default function result (state = initialState, action) {
  switch (action.type) {
    case 'SOMETHING':
      state = {...state, value: action.value}
      break;
  
    default:
      break;
  }
  return state;
}
