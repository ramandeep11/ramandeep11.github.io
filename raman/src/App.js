// App.js
import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SocialLinks from './components/SocialLinks';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTabChange = (tabName) => {
    switch (tabName) {
      case 'about':
        scrollToSection(aboutRef);
        break;
      case 'experience':
        scrollToSection(experienceRef);
        break;
      case 'projects':
        scrollToSection(projectsRef);
        break;
      case 'contact':
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header name="Ramandeep" onTabChange={handleTabChange} />
      <MainContent aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} contactRef={contactRef} />
      <SocialLinks links={[
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ramandeep-maan-b8a105185/' },
        { name: 'GitHub', url: 'https://github.com/ramandeep11/' }
      ]} />
    </div>
  );
}

export default App;
