import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';

function Authorization() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleAuthorization = (event) => {
    event.preventDefault();
    axios.post('https://localhost:44383/api/Account/login', {
      email: email,
      password: password
    })
      .then(response => {
        console.log(response.data); // log response from server

        // Add code to handle successful registration
        setIsConnected(true);
        setConnectionStatus('You are logged in');
      })
      .catch(error => {
        console.error(error); // log error from server
        // Add code to handle registration error
        setIsConnected(false);
        setConnectionStatus(' Incorrect data');
      });
    setEmail(''); setPassword('');
  };

  return (
    <form className='authorization-container' onSubmit={handleAuthorization}>
      <h2 className='authorization-text'>Log in</h2>
      <div className='authorization-content'>
        <label>Email:</label>
        <input placeholder="Enter your email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password:</label>
        <input placeholder="Enter your password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div className='status'>{connectionStatus}</div>
      <button type="submit">Authorize</button>
      <p className='redirect-signup'>Don`t have an account yet? <a href='/signup'>Sign up here!</a></p>
    </form>
  );
}
export default Authorization;