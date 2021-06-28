import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='title text-center p-3'>{title}</h1>
      <div className='underline mb-5'></div>
    </div>
  );
};

export default Header;
