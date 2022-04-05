import React from 'react';
import './NotFound.css'
import error404 from './notFound.gif';


const NotFound = () => {
  return (
    <div className='error-page'>
      <img src={error404} alt="" />
    </div>
  );
};

export default NotFound;