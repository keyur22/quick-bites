import { useState } from 'react';
import Logo from '../../../public/logo.png';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <img className='logo' src={Logo} alt='Quick Bites Logo' />
      </Link>
      <ul className='links'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
      <button className='primary-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Header;
