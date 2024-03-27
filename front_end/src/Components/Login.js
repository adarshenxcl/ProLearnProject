import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header1 from './Header1';

import enxcllogo from './Images/enxcllogo.png';
import siplogo from './Images/siplogo.png';
import './Login.css';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  useEffect(() => {
    // Disable back button functionality
    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, []);

  const onBackButtonEvent = (e) => {
    // Prevent browser navigation
    window.history.forward();
  };


 
  const handleLogin = async () => {
    try {
      if (!username || !password) {
        setErrorMessage('Username and password are required.');
        setTimeout(() => {
          setErrorMessage('');
        }, 900);
        return;
      }

      console.log('Sending data:', { u_name: username, u_password: password });

      const { role, name, u_name: loggedInUName } = await fetchData(username, password);

      if (role === 'Coordinator') {
        localStorage.setItem('userName', name);
        navigate('/admin-home', { state: { name, u_name: loggedInUName } });
      } else if (role === 'CI') {
        localStorage.setItem('userName', name);
        navigate('/user-home', { state: { name, u_name: loggedInUName } });
      } else {
        setErrorMessage('Invalid credentials.');
        setTimeout(() => {
          setErrorMessage('');
        }, 1200);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

  const fetchData = async (uName, uPassword) => {
    try {
      console.log('Sending data:', { u_name: uName, u_password: uPassword });

      const response = await fetch('http://localhost:8080/api/users/role-and-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ u_name: uName, u_password: uPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response data from server:', data);
        return { role: data.role, name: data.name, u_name: uName };
      } else {
        console.error('Login failed:', response.status);
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  return (
    
      <div className="login-page bg-white"> {/* Apply Bootstrap bg-white class */}
        <Header1 />
        <div className='container'style={{height:'488px'}}>
          <div className='row'>
            <div className='col-md-6'>
              <img className="img-fluid" src={siplogo} alt="SIP Abacus Logo" /><br /><br/>
              <p>SIP Abacus is a skill development programme that can help in various aspects of your child’s development. SIP Abacus courses are designed to develop soft-skills, numerical abilities, and overall intelligence.</p>
            </div><br /> <br />
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <form style={{marginTop:'-50px', border: '2px solid #ccc', borderRadius: '40px', padding: '20px' ,width:'470px'}}>
                <div className='logo text-center mb-4'>
                  <img className="img-fluid" src={enxcllogo} alt="Enxcl Logo" style={{marginTop:'-70px',paddingTop:'10px', maxWidth: '75%' }} />
                </div>
                <div className='form-group mb-4 d-flex justify-content-center'>
                  <input type="text" className="form-control" id="username" placeholder="Enter Your UserName" name="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ maxWidth: '300px' ,height:'40px', textAlign: 'center',marginTop:'-50px'}} required />
                </div>
                <div className='form-group mb-4 d-flex justify-content-center'>
                  <input type="password" className="form-control" id="password" placeholder="Enter Your Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ maxWidth: '300px',height:'40px', textAlign: 'center', }} required />
                </div>
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleLogin}
                  style={{ marginLeft:'160px',alignItems:'center',backgroundColor: '#E5770A ', width: '100px',border: 'none' }}
                >
                  Sign In
                </button>
                <div className='pswd text-center mt-3'style={{paddingTop:'2px',paddingBottom:'50px'}}>
                  <a href="#" >Forgotten password....?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    
  );
};

export default Login;
