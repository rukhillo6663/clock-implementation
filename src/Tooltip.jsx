import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip, Card } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { toggleTooltip } from "./redux/tooltipSlicer";


function ToolTip() {
  const [time, setTime] = useState(new Date())

  const dispatch = useDispatch()
   const isOpen = useSelector((state) => state.tooltip.isOpen);
   const currentTime = useSelector((state) => state.timer.currentTime)

  return (
    <div
      style={{
        display: "block",
        width: 900,
        padding: 30,
      }}
    >
      <Card id="Tooltip" style={{cursor:"pointer"}} className="secondary">{currentTime.toLocaleTimeString()}</Card>
      <Tooltip
        delay={{ hide: 1000 }}
        isOpen={isOpen}
        placement="top-end"
        target="Tooltip"
        toggle={() => {
          dispatch(toggleTooltip(!isOpen));
        }}
      >
        {new Date().toLocaleTimeString()}
      </Tooltip>
    </div>
  );
}

export default ToolTip;
