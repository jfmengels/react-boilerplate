import React, {Component} from 'react';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import store from '../store';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
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
    );
  }
}
