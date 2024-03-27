import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './SidebarCi.css';

const SidebarCi = ({ u_name }) => { // Receive the u_name prop
  const location = useLocation();
  const sidebarItems = [
    
    { to: '/user-home', icon: faGraduationCap, text: 'View Batches' },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className={location.pathname === item.to ? 'active' : ''}>
            {/* Pass the u_name prop to the linked pages */}
            <Link to={{ pathname: item.to, state: { u_name } }}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCi;
