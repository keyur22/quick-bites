import { useState } from 'react';
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
      </ul>
      <button className='primary-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Header;
