import * as React from 'react';
import "./style.scss";
import {useState} from 'react';
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
const test = true;

const Header = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
      };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
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
          <a href="/our-pets">Our pets</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        
        {test ? (
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
              <li><p>Leo Messi</p></li>

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
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </li>
            </div>
          ) : (
          <div className='header-login-button'>
            <a href='/signup'>Sign in</a>
            <img src={`${publicURL}/images/log-in.svg`}/>
          </div>)}

        
      </ul>
      </div>
    </div>
  );
};

export default Header;
