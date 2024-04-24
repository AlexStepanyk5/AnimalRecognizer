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
  const [type] = useState(0);

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setConnectionStatus('Паролі не співпадають(');
      return;
    }
    axios //44383
      .post('https://localhost:7216/api/Register', {
        username: username,
        email: email,
        password: password,
        type: type
      })
      .then(response => {
        console.log(response.data);
        updateIsConnected(true);
        setConnectionStatus('Ви зареєстровані та увійшли, гав-гав!');
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        updateIsConnected(false);
        setConnectionStatus('Виникла помилка під час реєстрації, спробуйте знову(');
      });
    console.log(username);
    console.log(email);
    console.log(password);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <form className='signup-container' onSubmit={handleRegistration}>
      <h2 className='signup-text'>Реєстрація</h2>

      <div className='signup-content'>
        <label>Ім'я користувача:</label>
        <input placeholder="Введіть ім'я користувача" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <label>Електронна адреса:</label>
        <input placeholder="Введіть електронну адресу" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Пароль:</label>
        <input placeholder="Введіть пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <label>Підтвердіть пароль:</label>
        <input placeholder="Підтвердіть пароль" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <div className='status_signup'>{connectionStatus}</div>
      <button type="submit">Зареєструватись</button>
      <p className='redirect-auth'>Вже зареєстровані? <a href='/authorization'>Увійдіть тут!</a></p>
    </form>
  );
}

export default SignUp;