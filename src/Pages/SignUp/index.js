import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

function SignUp({ updateIsConnected }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setConnectionStatus('Passwords do not match');
      return;
    }
    axios //44383
      .post('https://localhost:7216/api/Register', {
        username: username,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
        updateIsConnected(true);
        setConnectionStatus('You are registered and logged in');
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        updateIsConnected(false);
        setConnectionStatus('Error occurred during registration');
      });
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <form className='signup-container' onSubmit={handleRegistration}>
      <h2 className='signup-text'>Sign up</h2>

      <div className='signup-content'>
        <label>Username:</label>
        <input placeholder="Type your username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <label>Email:</label>
        <input placeholder="Type your email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password:</label>
        <input placeholder="Type your password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <label>Confirm Password:</label>
        <input placeholder="Confirm your password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <div className='status_signup'>{connectionStatus}</div>
      <button type="submit">Register</button>
      <p className='redirect-auth'>Already signed up? <a href='/authorization'>Log in here!</a></p>
    </form>
  );
}

export default SignUp;