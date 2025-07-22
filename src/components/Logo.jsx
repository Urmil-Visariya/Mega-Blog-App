import React from 'react';
import logo from '../../src/logo.png'
function Logo({ width = '100px' }) {
  return (
      <img src={logo} className="h-18 w-19 object-contain"></img>
  );
}

export default Logo;