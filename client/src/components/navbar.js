import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark-mode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Player Info</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
