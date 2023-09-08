import React, { useEffect } from "react";
import { Card } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import './styles/tooltip.css'

const TooltipComponent = () => {
  
   const currentTime = useSelector((state) => state.timer.currentTime);
  useEffect(() => {
    const cssSheet = document.styleSheets[0];
    
    const hoverIndex = cssSheet.insertRule(
      "[data-tooltip]:hover:after {}",
      cssSheet.cssRules.length
    );
    const cssHover = cssSheet.cssRules[hoverIndex];

    const handleMouseMove = (e) => {
      const item = document.querySelector("[data-tooltip]");

      
        if (item.dataset.tooltip === "") {
          cssHover.style.display = "none";
          return;
        }

        cssHover.style.display = "block";
        cssHover.style.left = e.clientX + 15 + "px";
        cssHover.style.top = e.clientY - 60 + "px";
      ;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <p>
      <Card className="tooltip-card" data-tooltip={currentTime}>{currentTime}</Card>
    </p>
  );
};

export default TooltipComponent;
