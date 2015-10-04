import React from 'react'

import CounterDisplay from '../components/counter'
import { increment, decrement } from '../../../modules/counter/actions'

export default class Counter extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      amount: 5
    }
  }

  onIncrement (amount) {
    this.props.store.dispatch(increment(amount))
  }

  onDecrement (amount) {
    this.props.store.dispatch(decrement(amount))
  }

  render () {
    const store = this.props.store.getState()
    return (
      <CounterDisplay
        count={store.getIn(['counter', 'count'])}
        amount={this.state.amount}
        onIncrement={this.onIncrement.bind(this, this.state.amount)}
        onDecrement={this.onDecrement.bind(this, this.state.amount)}
      />
    )
  }
}

Counter.propTypes = {
  store: React.PropTypes.object.isRequired
}
