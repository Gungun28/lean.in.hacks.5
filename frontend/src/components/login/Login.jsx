// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Save token to local storage
      localStorage.setItem('token', data.token);

      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="email" name="email" onChange={handleInputChange} />
      <input type="password" name="password" onChange={handleInputChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
