import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTime } from "./redux/timerSlice";


import "./App.css";
import Timer from "./components/Timer";
import TimerComponent from "./components/Tooltip";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime(new Date().toLocaleTimeString()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="app">
      <Timer />
      <TimerComponent/>
      
    </div>
  );
}

export default App;





