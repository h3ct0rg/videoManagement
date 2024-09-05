import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/cameras">Cameras</Link></li>
        <li><Link to="/history">History</Link></li>
        <li>
          Configuration
          <ul>
            <li><Link to="/config/users">Users</Link></li>
            <li><Link to="/config/roles">Roles</Link></li>
            <li><Link to="/config/groups">Groups</Link></li>
            <li><Link to="/config/video-configuration">Video Configuration</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
