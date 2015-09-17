import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import nextReducer from './reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  // Provides support for DevTools
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export function configureStore(initialState) {
  const store = finalCreateStore(nextReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return store;
}

const store = configureStore();
export default store;
