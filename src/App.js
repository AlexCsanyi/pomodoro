import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import Timer from "./Components/Timer";
import TimerHeader from "./Components/TimerHeader";
import TimerDisplay from "./Components/TimerDisplay";
import TimerButton from "./Components/TimerButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment.duration(25, "minutes"),
      baseTime: moment.duration(25, "minutes")
    };

    this.setBaseTime = this.setBaseTime.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime
    });
  }

  render() {
    return (
      <div className="card text-center text-white bg-info">
        <TimerHeader />
        <TimerDisplay currentTime={this.state.currentTime} />
        <TimerButton />
        <Timer baseTime={this.state.baseTime} setBaseTime={this.setBaseTime} />
      </div>
    );
  }
}

export default App;
