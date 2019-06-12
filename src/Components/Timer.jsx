import React from "react";

function Timer() {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">Set Timer</h5>
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
    </>
  );
}

export default Timer;
