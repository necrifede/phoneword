
function updateNumericValue(value) {
  return {
    type: 'ADD_NUMERIC',
    payload: value
  }
}

module.exports = {
  updateNumericValue
}