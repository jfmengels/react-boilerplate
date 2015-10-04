import { compose, createStore, applyMiddleware } from 'redux'
import { devTools, persistState } from 'redux-devtools'
import { combineReducers } from 'redux-immutablejs'
import thunk from 'redux-thunk'

import * as reducers from './reducers'

const reducer = combineReducers(reducers)
const store = reducer()

const finalCreateStore = compose(
  applyMiddleware(thunk),
  // Provides support for DevTools
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

export default finalCreateStore(reducer, store)
