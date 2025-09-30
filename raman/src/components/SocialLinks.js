import React, { useState, useEffect } from 'react';

const SocialLinks = ({ links }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled by checking the body background or a custom property
    const checkDarkMode = () => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        const computedStyle = window.getComputedStyle(mainElement);
        const bgColor = computedStyle.backgroundColor;
        // If background is dark, we're in dark mode
        setDarkMode(bgColor.includes('15, 15, 35') || bgColor.includes('rgb(15, 15, 35)'));
      }
    };

    checkDarkMode();
    const interval = setInterval(checkDarkMode, 100);

    return () => clearInterval(interval);
  }, []);

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: darkMode
      ? 'rgba(15, 23, 42, 0.9)'
      : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderTop: darkMode
      ? '1px solid rgba(255, 255, 255, 0.1)'
      : '1px solid rgba(0, 0, 0, 0.1)',
    padding: '1rem 0',
    zIndex: 999,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const listStyle = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const linkStyle = {
    color: darkMode ? '#cbd5e1' : '#64748b',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const getIcon = (name) => {
    // Return empty string to remove emojis
    return '';
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <nav>
          <ul style={listStyle}>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                    e.target.style.color = '#667eea';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = darkMode ? '#cbd5e1' : '#64748b';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default SocialLinks;