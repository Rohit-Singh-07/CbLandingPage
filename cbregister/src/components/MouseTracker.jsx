import React, { useState } from "react";

const MouseTracker = () => {
  const [clicks, setClicks] = useState([]);

  // Event listener to track mouse clicks
  const handleClick = (event) => {
    const { clientX, clientY } = event; // Get the coordinates of the click event
    setClicks((prevClicks) => [...prevClicks, { x: clientX, y: clientY }]); // Store the click coordinates in the state
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      onClick={handleClick} // Attach click event listener to the container element
    >
      {/* Render "Click" text at each click position */}
      {clicks.map((click, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: click.y,
            left: click.x,
            color: "red",
            fontWeight: "bold",
            pointerEvents: "none", // Prevent the text from being clickable
          }}
        >
          Click
        </div>
      ))}
    </div>
  );
};

export default MouseTracker;
