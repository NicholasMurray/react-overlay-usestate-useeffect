import React from "react";
import ReactDom, { createPortal } from "react-dom";

function Overlay({ show, toggleOverlay }) {
  return show
    ? createPortal(
        <div className="overlay">
          overlay
          <button onClick={toggleOverlay}>x</button>
        </div>,
        document.body
      )
    : null;
}

Overlay.defaultProps = {
  show: false
};

export default Overlay;
