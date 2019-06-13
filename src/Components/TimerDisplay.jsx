import React from "react";
import * as timerStates from "../timerStates";

const leftPad = val => {
  if (val < 10) return `0${val}`;
  return `${val}`;
};

function TimerDisplay(props) {
  return (
    <div>
      <div className="center-block embed-responsive">
        {props.timerState === timerStates.COMPLETE}
      </div>
      <div className="card-header">
        {`${leftPad(props.currentTime.get("hours"))} : 
      ${leftPad(props.currentTime.get("minutes"))} :
      ${leftPad(props.currentTime.get("seconds"))}`}
      </div>
    </div>
  );
}

export default TimerDisplay;
