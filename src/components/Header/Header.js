import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-dark text-white header-nav'>
      <h1 className='head-title'>DSLR Canon 1200D Review</h1>  
      <nav>
      <Link className='nav-bar' to='/'>HOME</Link>
      <Link className='nav-bar' to='/reviews'>REVIEWS</Link>
      <Link className='nav-bar' to='/dashboard'>DASHBOARD</Link>
      <Link className='nav-bar' to='/blogs'>BLOGS</Link>
      <Link className='nav-bar' to='/about'>ABOUT</Link>
    </nav>
    </div>
  );
};

export default Header;