import React, { useState } from 'react';
import '../../assets/styles/History.css';

const History = () => {
  const [numViews, setNumViews] = useState(4);
  const [progress, setProgress] = useState(0);

  const handleViewSelection = (num: number) => {
    setNumViews(num);
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(event.target.value));
  };

  return (
    <div className="history-container">
      <div className="history-grid">
        {Array.from({ length: numViews }).map((_, index) => (
          <div key={index} className="history-view">
            Cámara {index + 1}
          </div>
        ))}
      </div>

      <div className="history-controls">
        <button className="history-button">Download Video</button>
        <button className="history-button">Capture Image</button>
      </div>

      <div className="progress-container">
        <label htmlFor="progress-bar">Scroll video:</label>
        <input
          type="range"
          id="progress-bar"
          value={progress}
          onChange={handleProgressChange}
          min="0"
          max="100"
          className="progress-bar"
        />
        <span>{progress}%</span>
      </div>

      <div className="view-options">
        {Array.from({ length: 12 }).map((_, index) => (
          <button
            key={index}
            className="view-option"
            onClick={() => handleViewSelection(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default History;
