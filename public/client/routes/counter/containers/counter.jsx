import React from 'react'

import CounterDisplay from '../components/counter'
import counterIncrement from '../../../modules/counter/actions/increment'
import counterDecrement from '../../../modules/counter/actions/decrement'

export default class Counter extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      amount: 5
    }
  }

  onIncrement (amount) {
    this.props.store.dispatch(counterIncrement(amount))
  }

  onDecrement (amount) {
    this.props.store.dispatch(counterDecrement(amount))
  }

  render () {
    return (
      <CounterDisplay
        count={this.props.store.getState().counter.count}
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
