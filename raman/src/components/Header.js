import React, { useState, useEffect } from 'react';

const Header = ({ name, onTabChange }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50'
          : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-title font-bold text-gray-900">
              {name}
            </h1>

            <nav>
              <ul className="flex items-center gap-1">
                {['about', 'experience', 'projects', 'contact'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => handleTabClick(tab)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 capitalize ${
                        activeTab === tab
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="h-20"></div>
    </>
  );
};

export default Header;
