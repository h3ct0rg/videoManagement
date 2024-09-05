import React, { useState } from 'react';
import '../../assets/styles/Cameras.css';

const Cameras = () => {
  const [numCameras, setNumCameras] = useState(4);

  const handleCameraSelection = (num: number) => {
    setNumCameras(num);
  };

  return (
    <div className="cameras-container">
      <div className="camera-grid">
        {Array.from({ length: numCameras }).map((_, index) => (
          <div key={index} className="camera-view">
            Cámara {index + 1}
          </div>
        ))}
      </div>
      <div className="camera-options">
        {Array.from({ length: 12 }).map((_, index) => (
          <button
            key={index}
            className="camera-option"
            onClick={() => handleCameraSelection(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cameras;
