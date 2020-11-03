import React, { useEffect, useState } from "react";
import "./style.css";
import Overlay from "./overlay/Overlay";

function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
}

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
      <h1>Hello StackBlitzterzz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={toggleOverlay}>Show Overlay</button>
      <Overlay show={showOverlay} toggleOverlay={toggleOverlay} />
    </div>
  );
}
