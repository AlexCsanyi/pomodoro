import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newBaseTime = this.props.baseTime;
    if (e.target.id === "hours")
      newBaseTime
        .subtract(newBaseTime.get("hours"), "hours")
        .add(parseInt(e.target.value), "hours");
    if (e.target.id === "minutes")
      newBaseTime
        .subtract(newBaseTime.get("minutes"), "minutes")
        .add(parseInt(e.target.value), "minutes");
    if (e.target.id === "seconds")
      newBaseTime
        .subtract(newBaseTime.get("seconds"), "seconds")
        .add(parseInt(e.target.value), "seconds");

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <>
        <div className="card-body">
          <h5 className="card-title">Set Timer</h5>
          <div className="row">
            <div className="form-group p-1">
              <label htmlFor="hours">Hours</label>
              <input
                id="hours"
                type="number"
                min="0"
                className="form-control"
                defaultValue={this.props.baseTime.get("hours")}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="minutes">Minutes</label>
              <input
                id="minutes"
                type="number"
                min="0"
                className="form-control"
                defaultValue={this.props.baseTime.get("minutes")}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group p-1">
              <label htmlFor="seconds">Seconds</label>
              <input
                id="seconds"
                type="number"
                min="0"
                className="form-control"
                defaultValue={this.props.baseTime.get("seconds")}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Timer;
