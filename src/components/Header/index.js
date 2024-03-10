import React from 'react';
import "./style.scss";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const publicURL = process.env.PUBLIC_URL;


const Header = ({ isConnected }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = React.useState(true);

   isConnected = false;
    const handleChange = (event) => {
        setAuth(event.target.checked);
      };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        isConnected = false;
      };
    
      return (
        <div className="header-container">
          <div className='header-content'>
      <div>
        <a className="heading" href="/">
          <img
            alt="logo"
            className="logo"
            src={`${publicURL}/images/pet.png`}
          />
          PetCare
        </a>
      </div>
      <ul className="navbar-container">
        <li>
          <a href="/our-pets">Чотирилапі друзі</a>
        </li>
        <li>
          <a href="/blog">Блог</a>
        </li>
        <li>
          <a href="/about">Про нас</a>
        </li>
        
        {isConnected ? (
          <div>
            <li>
              <div onClick={handleMenu} className='user-icon'>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <li><p>AlexSt</p></li>
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Мій профіль</MenuItem>
                <MenuItem onClick={handleClose}>Налаштування</MenuItem>
                <MenuItem onClick={handleClose}>Вийти</MenuItem>
              </Menu>
            </li>
          </div>
        ) : (
          <div className='header-login-button'>
            <a href='/signup'>Увійти</a>
            <img src={`${publicURL}/images/log-in.svg`} />
          </div>
        )}

        
      </ul>
      </div>
    </div>
  );
};

export default Header;
