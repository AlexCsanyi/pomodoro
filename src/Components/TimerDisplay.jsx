import React from "react";

const leftPad = val => {
  if (val < 10) return `0${val}`;
  return `${val}`;
};

function TimerDisplay(props) {
  return (
    <div className="card-header">
      {`${leftPad(props.currentTime.get("hours"))} : 
      ${leftPad(props.currentTime.get("minutes"))} :
      ${leftPad(props.currentTime.get("seconds"))}`}
    </div>
  );
}

export default TimerDisplay;
