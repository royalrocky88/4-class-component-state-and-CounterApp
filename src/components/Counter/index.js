// Build Counter Application

import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(oldState => {
      return {count: oldState.count + 1}
    })
  }

  onReset = () => {
    this.setState(oldState => {
      return {count: 0}
    })
  }

  onDecrement = () => {
    this.setState(oldState => {
      return {count: oldState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onReset}>
            Reset
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
