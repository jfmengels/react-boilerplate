import React from 'react'

export default class CounterDisplay extends React.Component {
  static propTypes = {
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
    count: React.PropTypes.number.isRequired,
    amount: React.PropTypes.number.isRequired
  }

  render () {
    return (
      <div>
        <button onClick={this.props.onIncrement}>+{this.props.amount}</button>
        <span>Count: {this.props.count || 0}</span>
        <button onClick={this.props.onDecrement}>-{this.props.amount}</button>
      </div>
    )
  }
}
