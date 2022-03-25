import React from "react";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import "./percentCircle.css";

export function PercentCircle (props) {
  const {item} = props;
  return (
    <div>
      <div className="progress-bar">
        <CircularProgressbarWithChildren
          value={item.vote_average}
          maxValue={10}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#000",
            textColor: "#fff",
            textSize:"26",
            pathColor: "#41BD6C",
            trailColor: "transparent"
          })}>
          <div style={{ fontSize: 12, marginTop: -5, color: "#fff", textAlign: "center" }}>{`${Math.round(item.vote_average)}%`}</div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}
