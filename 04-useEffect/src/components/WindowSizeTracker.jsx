import React, { useEffect, useState } from "react";

function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("UnSubscribed from resize event.");
    };
  }, []);

  return (
    <div>
      <h2>Window WIdth Tracker</h2>
      <p>Current Width: {width}px</p>
    </div>
  );
}

export default WindowSizeTracker;
