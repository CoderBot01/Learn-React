import React from 'react'

function EventPropagation() {
    return (
        <div className="Toolbar" onClick={() => {
          alert('You clicked on the toolbar!');
        }}>
            <h1>Event Propagation</h1>
          <button onClick={() => alert('Playing!')}>
            Play Movie
          </button>
          <button onClick={() => alert('Uploading!')}>
            Upload Image
          </button>
        </div>
      );
    }
export default EventPropagation


