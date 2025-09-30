import React, { useState, useEffect } from 'react';

const Header = ({ name, onTabChange }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (onTabChange) {
      onTabChange(tabName);
    }
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: isScrolled
      ? 'rgba(255, 255, 255, 0.95)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
    padding: isScrolled ? '15px 0' : '25px 0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const nameStyle = {
    fontSize: isScrolled ? '1.5rem' : '2rem',
    fontWeight: '700',
    color: isScrolled ? '#333' : '#fff',
    margin: 0,
    transition: 'all 0.3s ease',
    background: isScrolled ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'none',
    WebkitBackgroundClip: isScrolled ? 'text' : 'none',
    WebkitTextFillColor: isScrolled ? 'transparent' : '#fff',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const getTabStyle = (tabName) => ({
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    fontSize: '0.9rem',
    color: isScrolled ? '#333' : '#fff',
    background: activeTab === tabName
      ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255, 255, 255, 0.2)')
      : 'transparent',
    border: activeTab === tabName
      ? (isScrolled ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid rgba(255, 255, 255, 0.3)')
      : '1px solid transparent',
  });

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <h1 style={nameStyle}>{name}</h1>
          <nav>
            <ul style={navStyle}>
              <li
                style={getTabStyle('about')}
                onClick={() => handleTabClick('about')}
                onMouseEnter={(e) => {
                  if (activeTab !== 'about') {
                    e.target.style.background = isScrolled ? 'rgba(102, 126, 234, 0.05)' : 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'about') {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                About
              </li>
              <li
                style={getTabStyle('experience')}
                onClick={() => handleTabClick('experience')}
                onMouseEnter={(e) => {
                  if (activeTab !== 'experience') {
                    e.target.style.background = isScrolled ? 'rgba(102, 126, 234, 0.05)' : 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'experience') {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                Experience
              </li>
              <li
                style={getTabStyle('projects')}
                onClick={() => handleTabClick('projects')}
                onMouseEnter={(e) => {
                  if (activeTab !== 'projects') {
                    e.target.style.background = isScrolled ? 'rgba(102, 126, 234, 0.05)' : 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'projects') {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                Projects
              </li>
              <li
                style={getTabStyle('contact')}
                onClick={() => handleTabClick('contact')}
                onMouseEnter={(e) => {
                  if (activeTab !== 'contact') {
                    e.target.style.background = isScrolled ? 'rgba(102, 126, 234, 0.05)' : 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'contact') {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default Header;
