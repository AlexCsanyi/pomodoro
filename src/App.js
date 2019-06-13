import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import Timer from "./Components/Timer";
import TimerHeader from "./Components/TimerHeader";
import TimerDisplay from "./Components/TimerDisplay";
import TimerButton from "./Components/TimerButton";
import * as timerStates from "./timerStates";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment.duration(25, "minutes"),
      baseTime: moment.duration(25, "minutes"),
      timerState: timerStates.NOT_SET
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime)
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null
    });
  }

  reduceTimer() {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "second");

    this.setState({
      currentTime: newTime
    });
  }

  render() {
    return (
      <div className="card text-center text-white bg-info">
        <TimerHeader />
        <TimerDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <TimerButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
        />
        {this.state.timerState !== timerStates.RUNNING && (
          <Timer
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />
        )}
      </div>
    );
  }
}

export default App;
