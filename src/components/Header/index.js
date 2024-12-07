import React, { useState } from 'react';
import Logo from '../../../public/logo.png';
import './style.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className='navbar'>
      <img className='logo' src={Logo} alt='Quick Bites Logo' />
      <ul className='links'>
        <li>About</li>
        <li>Contact Us</li>
        <button className='login-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </ul>
    </nav>
  );
};

export default Header;
