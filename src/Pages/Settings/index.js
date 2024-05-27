import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const Settings = () => {
  const navigate = useNavigate();

  const [accountInfo, setAccountInfo] = useState({
    username: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: false
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAccountInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!accountInfo.username) newErrors.username = "Поле Ім'я користувача обов'язкове";
    if (!accountInfo.email) newErrors.email = "Поле Електронна адреса обов'язкове";
    if (accountInfo.newPassword !== accountInfo.confirmPassword) newErrors.confirmPassword = 'Паролі не співпадають';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post('/api/updateAccount', accountInfo);
      setSuccessMessage('Дані успішно змінено');
      // Optionally, navigate to another page
      // navigate('/somePage');
    } catch (error) {
      setErrors({ apiError: 'Сталась помилка' });
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-header-container">
        <h1 className="settings-header">Налаштування профілю</h1>
      </div>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ім'я користувача</label>
          <input
            type="text"
            name="username"
            value={accountInfo.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label>Електронна пошта</label>
          <input
            type="email"
            name="email"
            value={accountInfo.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Введіть дійсний пароль</label>
          <input
            type="password"
            name="currentPassword"
            value={accountInfo.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Введіть новий пароль</label>
          <input
            type="password"
            name="newPassword"
            value={accountInfo.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Підтвердіть новий пароль</label>
          <input
            type="password"
            name="confirmPassword"
            value={accountInfo.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div className="form-group">
          <label className='notifications'>
            <input
              type="checkbox"
              name="notifications"
              checked={accountInfo.notifications}
              onChange={handleChange}
            />
            Увімкнути сповіщення електронною поштою
          </label>
        </div>
        {errors.apiError && <p className="error">{errors.apiError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit">Застосувати зміни</button>
      </form>
    </div>
  );
};

export default Settings;
