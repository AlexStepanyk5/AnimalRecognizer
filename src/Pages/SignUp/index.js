import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('Log in');

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setIsConnected(false);
      setConnectionStatus('Passwords do not match');
      return;
    }
    axios.post('https://localhost:44383/api/Register', {
      username: username,
      email: email,
      password: password
    })
    .then(response => {
      console.log(response.data); // log response from server

      // Add code to handle successful registration
      setIsConnected(true);
      setConnectionStatus('You are registered and logged in');
    })
    .catch(error => {
      console.error(error); // log error from server
      // Add code to handle registration error
      setIsConnected(false);
      setConnectionStatus('Error occurred during registration');
    });
    setUsername(''); setEmail(''); setPassword(''); setConfirmPassword('');
  };
  
  return (
    <form className='authorization-container' onSubmit={handleRegistration}>
      <div>{connectionStatus}</div>
      <label>Username:</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignUp;
