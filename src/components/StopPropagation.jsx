import React from "react";

function StopPropagation({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
        <h1>Stop Propagation</h1>
      <StopPropagation onClick={() => alert("Playing!")}>
        Play Movie
      </StopPropagation>
      <StopPropagation onClick={() => alert("Uploading!")}>
        Upload Image
      </StopPropagation>
    </div>
  );
}
