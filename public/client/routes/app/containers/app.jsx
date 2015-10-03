import React from 'react'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

import store from '../../../modules/store'

import Counter from '../../counter/containers/counter'

export default class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    return (
    <div>
      <div>
        <h1>Boilerplate</h1>
        <Counter store={store} />
      </div>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>
    )
  }
}
