import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cameras from '../features/cameras/Cameras';
import History from '../features/history/History';
import Users from '../features/configuration/users/Users';
import Roles from '../features/configuration/roles/Roles';
import Groups from '../features/configuration/groups/Groups';
import VideoConfig from '../features/configuration/videoConfiguration/VideoConfiguration';
import LeftMenu from '../layout/LeftMenu';
import VideoConfiguration from '../features/configuration/videoConfiguration/VideoConfiguration';

const AppRoutes = () => {
  return (
    <Router>
      <LeftMenu />
      <Routes>
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/history" element={<History />} />
        <Route path="/config/users" element={<Users />} />
        <Route path="/config/roles" element={<Roles />} />
        <Route path="/config/groups" element={<Groups />} />
        <Route path="/config/video-configuration" element={<VideoConfiguration />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
