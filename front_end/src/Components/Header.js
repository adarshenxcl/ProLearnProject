import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import enxcllogo from './Images/enxcllogo.png';

function Header({ name }) { // Receive the 'name' prop as an argument
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Retrieve the name from local storage when the component mounts
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <header className="main-header fixed-top ">
            <div className="logo ">
            <div className='image'>
            <img className="img-fluid" src={enxcllogo} alt="Enxcl Logo"  />
            </div>
            </div>
            <nav className="main-nav ">
           
                <ul>
                    {/* Profile dropdown */}
                    
                    <Dropdown className='drop'>
                        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                            <FaUserCircle /> {/* Profile icon */}
                            <span className="user-name">{name || userName}</span> {/* User's name */}
                        </Dropdown.Toggle>
                        
                
             
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Home</Dropdown.Item>
                            <Dropdown.Item href="#">About</Dropdown.Item>
                            <Dropdown.Item href="#">Services</Dropdown.Item>
                            <Dropdown.Item href="#">Contact</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
