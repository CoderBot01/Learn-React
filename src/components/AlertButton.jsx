import React from 'react';

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Tool() {
  return (
    <div>
        <h1>Reading props in event handlers</h1>
      <AlertButton message="Poi padi po">
        Hi
      </AlertButton>
      <AlertButton message="Vekkamae illa">
        Bye
      </AlertButton>
    </div>
  );
}

