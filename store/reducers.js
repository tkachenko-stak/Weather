import { combineReducers } from 'redux'
import { SESSION_STATE } from '../modules/constants'
import { sessionReducer } from '../modules/reducers'

export default asyncReducers =>
  combineReducers({
    [SESSION_STATE]: sessionReducer,
    ...asyncReducers,
  })
