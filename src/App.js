import React, { Component } from "react";
import "./App.css";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment.duration(25, "minutes"),
      baseTime: moment.duration(25, "minutes")
    };
  }

  render() {
    return (
      <div className="card text-center text-white bg-info">
        <div class="card-header text-uppercase">Pomodoro Power</div>
        <div class="card-header">00:00:00</div>
        <div class="card-body">
          <h5 class="card-title">Set Timer</h5>
          <button className="btn btn-outline-light m-3">START</button>
          <div className="row">
            <div className="form-group p-1">
              <label htmlFor="hours">Hours</label>
              <input id="hours" type="number" className="form-control" />
            </div>
            <div className="form-group p-1">
              <label htmlFor="minutes">Minutes</label>
              <input id="minutes" type="number" className="form-control" />
            </div>
            <div className="form-group p-1">
              <label htmlFor="seconds">Seconds</label>
              <input id="seconds" type="number" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
