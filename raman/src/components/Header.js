// components/Header.js
import React from 'react';

const Header = ({ name, onTabChange }) => {
  const handleTabClick = (tabName) => {
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

  return (
    <header>
      <h1>{name}</h1>
      <nav>
        <ul className="tabs">
          <li onClick={() => handleTabClick('about')}>About Me</li>
          <li onClick={() => handleTabClick('experience')}>Experience</li>
          <li onClick={() => handleTabClick('projects')}>Projects</li>
          <li onClick={() => handleTabClick('contact')}>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
