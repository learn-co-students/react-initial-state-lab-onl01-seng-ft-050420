import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  bombMessage() {
    if (this.state.secondsLeft == 0) {
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }
  render() {
    return (
      <div>
        {this.bombMessage()}
      </div>
    )
  }
}
