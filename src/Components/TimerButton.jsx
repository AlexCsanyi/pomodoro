import React from "react";
import * as timerStates from "../timerStates";

class TimerButton extends React.Component {
  constructor(props) {
    super(props);

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <button
          onClick={this.props.startTimer}
          className="btn btn-outline-light m-3"
        >
          START
        </button>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <button
          onClick={this.props.stopTimer}
          className="btn btn-outline-danger m-3"
        >
          STOP
        </button>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <button
          onClick={this.props.stopTimer}
          className="btn btn-outline-warning m-3"
        >
          RESET
        </button>
      );
  }

  render() {
    return <div>{this.getButton()}</div>;
  }
}

export default TimerButton;
