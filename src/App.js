import React, { useState } from "react";
import "./style.css";
import Overlay from "./overlay/Overlay";
import useKeypress from "./hooks/useKeypress";

export default function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useKeypress("Escape", () => {
    setShowOverlay(false);
  });

  return (
    <div>
      <h1>A React overlay using useEffect and useState hooks</h1>
      <p>works with button click to open and close, or esc to dismiss</p>
      <button onClick={toggleOverlay}>Show Overlay</button>
      <Overlay show={showOverlay} toggleOverlay={toggleOverlay} />
      <div id="portal-container" />
    </div>
  );
}
