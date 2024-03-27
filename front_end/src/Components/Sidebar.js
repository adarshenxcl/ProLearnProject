import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAddressCard, faUsers, faUserFriends, faTasks, faSearch, faAngleDoubleRight, faHome,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const Sidebar = () => {
  const location = useLocation();
  const sidebarItems = [
    { to: '/admin-home', icon: faHome, text: 'HOME' },
    { to: '/new-student', icon: faUserPlus, text: 'ADD NEW STUDENTS' },
    { to: '/view-students', icon: faAddressCard, text: 'VIEW STUDENTS DETAILS' },
    { to: '/new-batch-creation', icon: faUsers, text: 'CREATE NEW BATCHES' },
    { to: '/batch-students', icon: faUserFriends, text: 'ADD STUDENTS TO BATCH' },
    { to: '/view-batch', icon: faTasks, text: 'VIEW EXISTING BATCH' },
    { to: '/level', icon:faGraduationCap, text: 'LEVEL' },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className={location.pathname === item.to ? 'active' : ''}>
            <Link to={item.to}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
