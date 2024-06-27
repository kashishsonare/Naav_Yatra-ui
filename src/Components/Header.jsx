// src/Header.jsx

import React from 'react';
import Styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>Naav_yatra</div>
      <nav className={Styles.nav}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
