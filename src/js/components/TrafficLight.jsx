import React, { useState } from "react";
import ReactDOM from "react-dom";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "on" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "on" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "on" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);

export default TrafficLight;