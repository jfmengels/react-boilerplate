import React from 'react'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

import store from '../../../modules/store'

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
        {this.props.children}
      </div>
      <div>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}
