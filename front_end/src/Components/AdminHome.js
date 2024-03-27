import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header'; // Make sure this is the correct path to your Header component

import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHome.css';
import Viewstudents from './Viewstudents';

const AdminHome = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const name = location?.state?.name || '';

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div style={{marginTop: '102px' }}>
      <Header name={name} /> {/* Pass the name as a prop to Header */}
      <div className="adminbody">
        <Sidebar sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      </div>
    
    </div>
  );
};

export default AdminHome;
