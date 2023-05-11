import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';

function Authorization() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('Log in');

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
      <div>{connectionStatus}</div>
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Authorize</button>
    </form>
  );
}
export default Authorization;