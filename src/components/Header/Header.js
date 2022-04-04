import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>DSLR Canon 1200D Review</h1>  
      <nav>
      <Link to='/'>HOME</Link>
      <Link to='/reviews'>REVIEWS</Link>
      <Link to='/dashboard'>DASHBOARD</Link>
      <Link to='/blogs'>BLOGS</Link>
      <Link to='/about'>ABOUT</Link>
    </nav>
    </div>
  );
};

export default Header;