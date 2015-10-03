import React from 'react'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

export default class Debug extends React.Component {
  render () {
    return (
    <DebugPanel top right bottom>
      <DevTools store={this.props.store} monitor={LogMonitor} />
    </DebugPanel>
    )
  }
}

Debug.propTypes = {
  store: React.PropTypes.object.isRequired
}
