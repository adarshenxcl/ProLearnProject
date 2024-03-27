import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SidebarCI from './SidebarCI';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHome.css';
import Viewstudents from './Viewstudents'; // Import the component whose content you want to display

const HomeUser = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const name = location?.state?.name || '';

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div style={{ marginTop: '102px' }}>
      <Header name={name} />
      <div className="userbody">
        <SidebarCI />
        {/* Render the content from another page/component */}
       
      </div>
    </div>
  );
};

export default HomeUser;
