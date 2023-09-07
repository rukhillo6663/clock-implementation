import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip, Card } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { toggleTooltip } from "../redux/tooltipSlicer";

function Timer() {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left:0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
     const offsetX = 10; // Offset from the mouse pointer in the X-axis
     const offsetY = -20; // Offset from the mouse pointer in the Y-axis

     // Set the tooltip position
     setTooltipPosition({ top: clientY , left: clientX });
  };
  console.log(tooltipPosition);
 

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.tooltip.isOpen);
  const currentTime = useSelector((state) => state.timer.currentTime);

  console.log(currentTime)

  return (
    <div
      style={{
        display: "block",
        width: 900,
        padding: 30,
      }}
    >
      <Card
        id="Tooltip"
        style={{ cursor: "pointer", fontSize: "5rem" }}
        className="secondary"
        // onMouseMoveCapture={handleMouseMove}
      >
        {currentTime}
      </Card>
      <Tooltip
        delay={{ hide: 1000 }}
        isOpen={isOpen}
        // style={{ position: "absolute", top: tooltipPosition.top }}
        placement="top-end"
        target="Tooltip"
        followCursor = {true}
        toggle={() => {
          dispatch(toggleTooltip(!isOpen));
        }}
      >
        {new Date().toLocaleTimeString()}
      </Tooltip>
      
    </div>
  );
}

export default Timer;
