import React, { useState } from 'react';
import '../../../assets/styles/VideoConfiguration.css';

const VideoConfiguration = () => {
  const [resolution, setResolution] = useState('1080p');
  const [fps, setFps] = useState(30);
  const [compression, setCompression] = useState('Medium');
  const [streamQuality, setStreamQuality] = useState('High');
  const [storageDuration, setStorageDuration] = useState(30); // In days
  const [motionDetection, setMotionDetection] = useState(false);

  const handleSave = () => {
    // Logic to save the configuration
    alert('Configuration saved successfully');
  };

  return (
    <div className="video-config-container">
      <h2>Video Configuration</h2>

      <div className="config-section">
        <label>Resolution:</label>
        <select value={resolution} onChange={(e) => setResolution(e.target.value)}>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="4K">4K</option>
        </select>
      </div>

      <div className="config-section">
        <label>Frames Per Second (FPS):</label>
        <input
          type="number"
          value={fps}
          onChange={(e) => setFps(Number(e.target.value))}
          min="15"
          max="60"
        />
      </div>

      <div className="config-section">
        <label>Video Compression:</label>
        <select value={compression} onChange={(e) => setCompression(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="config-section">
        <label>Stream Quality:</label>
        <select value={streamQuality} onChange={(e) => setStreamQuality(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="config-section">
        <label>Storage Duration (days):</label>
        <input
          type="number"
          value={storageDuration}
          onChange={(e) => setStorageDuration(Number(e.target.value))}
          min="1"
          max="365"
        />
      </div>

      <div className="config-section">
        <label>Motion Detection:</label>
        <input
          type="checkbox"
          checked={motionDetection}
          onChange={(e) => setMotionDetection(e.target.checked)}
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Save Configuration
      </button>
    </div>
  );
};

export default VideoConfiguration;
