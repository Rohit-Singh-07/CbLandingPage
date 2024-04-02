import React, { useState } from "react";

const MouseTracker = () => {
  const [clicks, setClicks] = useState([]);
  const handleClick = (event) => {
    const { clientX, clientY } = event; 
    setClicks((prevClicks) => [...prevClicks, { x: clientX, y: clientY }]); 
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      onClick={handleClick} >

      {clicks.map((click, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: click.y,
            left: click.x,
            color: "red",
            fontWeight: "bold",
            pointerEvents: "none",
          }}
        >
          Click
        </div>
      ))}
    </div>
  );
};

export default MouseTracker;
