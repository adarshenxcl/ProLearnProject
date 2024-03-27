import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import user circle icon
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks
import Dropdown from 'react-bootstrap/Dropdown'; // Import Bootstrap Dropdown component
import './Header1.css'; // Import the CSS file

function Header1({ name }) { // Receive the 'name' prop as an argument
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.clear();
        navigate('/', { replace: true });
    }

    console.log('Name passed to Header:', name); // Log the name to console for checking

    return (
        <header className="custom-header ">
            <div className="custom-logo ">
                {/* You can add a logo here if needed */}
            </div>
            
        </header>
    )
}

export default Header1;
