import React from 'react'

import createStore from '../../../store'

import Counter from '../../counter/containers/counter'
import Debug from '../components/Debug'
import Header from '../components/Header'

const store = createStore()

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
      <Header />
      <Counter store={store} />
      <Debug store={store} />
    </div>
    )
  }
}
