import axios from 'axios';
import { server } from './config'

const host = `http://${server.host}:${server.port}`

export function updateNumericValue(value) {
  return {
    type: 'ADD_NUMERIC',
    payload: value
  }
}

export function updateResult(value) {
  return async dispatch => {
    const response = await axios.get(`${host}/phonenumber?value=${value}`)
    dispatch({
      type: 'UPDATE_RESULTS',
      payload: response.data.result || []
    })
  }
}

export function updateResultValue(value) {
  return {
    type: 'SELECT_RESULT',
    payload: value
  }
}
