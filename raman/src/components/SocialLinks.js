import React, { useState, useEffect } from 'react';

const SocialLinks = ({ links }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.body.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-50 ${
      darkMode
        ? 'bg-gray-900/90 border-t border-gray-800'
        : 'bg-white/90 border-t border-gray-200'
    } backdrop-blur-md`}>
      <div className="container">
        <div className="flex justify-center py-4">
          <nav>
            <ul className="flex items-center gap-6">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-gray-100'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default SocialLinks;