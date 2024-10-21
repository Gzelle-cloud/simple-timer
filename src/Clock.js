import { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  render() {
    return (
      <p className="Time">{this.state.time}</p>
    )
  }

}