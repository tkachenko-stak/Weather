import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import persistStore from './persist-store'
import persistReducer from './persist-reducers'

export default function initStore(initialState = {}) {
  const middlewares = [thunk]
  const enhancers = []

  const store = createStore(
    persistReducer(),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers),
  )

  const persistor = persistStore(store)
  return { store, persistor }
}
