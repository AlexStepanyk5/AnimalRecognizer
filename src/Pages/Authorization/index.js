import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

function Authorization({ updateIsConnected, updateUserName }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleAuthorization = (event) => {
    event.preventDefault();
    axios
      .post('https://localhost:7216/api/Account/login', {
        email: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
        updateIsConnected(true);
        setConnectionStatus('Гав-гав!');
        updateUserName(response.data.name); // Update userName state
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        updateIsConnected(false);
        setConnectionStatus('Спробуйте знову(');
      });
    setEmail('');
    setPassword('');
  };

  return (
    <form className='authorization-container' onSubmit={handleAuthorization}>
      <h2 className='authorization-text'>Вхід</h2>
      <div className='authorization-content'>
        <label>Електронна адреса:</label>
        <input placeholder="Введіть електронну адресу" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Пароль:</label>
        <input placeholder="Введіть пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div className='status'>{connectionStatus}</div>
      <button type="submit">Увійти</button>
      <p className='redirect-signup'>Ще не маєте профілю? <a href='/signup'>Зареєструйтесь тут!</a></p>
    </form>
  );
}

export default Authorization;
