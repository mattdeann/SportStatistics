import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <p className="head date">{Date().slice(0,16)}</p>
      <p className="head title">Sports Statistics</p>
      <p className="head"></p>
    </header>
  )
}

export default Header;
