// Login.js
import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({type, user, setUser}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleLogin = async () => {
    try {
      const response = await fetch(type=="business"?'/auth/login':'/auth/userlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) { // Check if response is successful
        const data = await response.json();
        setUser(data.info._id)
        // console.log(user)
        
        localStorage.setItem('token', data.accessToken);
        navigate('/');
      } else {
        console.error('Login failed');
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='outer-login'>

      <div className='login-container'>
        {/* <h1>Login</h1> */}
        <h2 className='login-heading'>Login</h2>
        <input type="email" name="email" onChange={handleInputChange} placeholder='Email'/>
        <input type="password" name="password" onChange={handleInputChange} placeholder='Password'/>
        {/* <button className='login-btn' onClick={handleLogin}>Login</button> */}
        <button className='btn' onClick={handleLogin}>Login</button>
      </div>

      <div className='logo'>
        <img src='https://www.shutterstock.com/image-vector/shop-local-badge-logo-icon-260nw-563514013.jpg' alt='...' />
      </div>
      {/* <h2>Login</h2> */}
    </div>
  );
};

export default Login;
