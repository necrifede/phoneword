import { combineReducers } from 'redux'
import value from './value'
import result from './result'

/**
 * Put all reducers together to create the store
 */
const reducer = combineReducers({ result, value })

export default reducer