import React from "react";
import * as timerStates from "../timerStates";
// import { Player, ControlBar } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";

const leftPad = val => {
  if (val < 10) return `0${val}`;
  return `${val}`;
};

class TimerDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.timerState === timerStates.COMPLETE && (
          <iframe
            title="myvideo"
            src="https://player.vimeo.com/video/82845229?autoplay=1&title=0&byline=0&portrait=0&badge=0"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        )}
        <div className="card-header">
          {`${leftPad(this.props.currentTime.get("hours"))} : 
          ${leftPad(this.props.currentTime.get("minutes"))} :
          ${leftPad(this.props.currentTime.get("seconds"))}`}
        </div>
      </div>
    );
  }
}

export default TimerDisplay;
