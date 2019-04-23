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
    console.log('value: ', value)
    const response = await axios.get(`${host}/phonenumber?value=${value}`)
    console.log('response.data.result: ', response.data.result)
    dispatch({
      type: 'UPDATE_RESULTS',
      payload: response.data.result || []
    })
  }
}
