"use client";
import React, { useState, useEffect } from 'react';
import './admin.css';
import Introduction from './sekcje/Introduction' 
import ContentManagement from './sekcje/ContentManagement' 
import Basics from './sekcje/Basics' 
import Troubleshooting from './sekcje/Troubleshooting' 
import Security from './sekcje/Security' 
import SEO from './sekcje/SEO' 
import UserManagement from './sekcje/UserManagement' 
import Plugins from './sekcje/Plugins' 
import CustomizingSite from './sekcje/CustomizingSite' 
import UsingElementor from './sekcje/UsingElementor'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [isNavOpen, setIsNavbarOpen] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  useEffect(() => {
    const storedPassword = "#^Agz/98uv";
    if (password === storedPassword) {
      setIsAuthenticated(true);
    }
  }, [password]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNavToggle  = () => {
    setIsNavbarOpen(!isNavOpen);
  };
  
  const handleMouseEnter = () => {
    setIsPreviewVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPreviewVisible(false);
  };

  const handleImageClick = (imgSrc) => {
    setFullScreenImage(imgSrc);
  };

  const handleFullScreenClose = () => {
    setFullScreenImage(null);
  };

  const sections = [
    { id: 'Introduction', title: 'Wprowadzenie', content: <Introduction handleImageClick={handleImageClick} /> },
    { id: 'Basics', title: 'Podstawy WordPressa', content: <Basics handleImageClick={handleImageClick} /> },
    { id: 'ContentManagement', title: 'Zarządzanie treścią', content: <ContentManagement handleImageClick={handleImageClick} /> },
    // { id: 'UsingElementor', title: 'Korzystanie z Elementora', content: <UsingElementor handleImageClick={handleImageClick} /> },
    // { id: 'CustomizingSite', title: 'Personalizacja strony', content: <CustomizingSite handleImageClick={handleImageClick} /> },
    // { id: 'Plugins', title: 'Wtyczki', content: <Plugins handleImageClick={handleImageClick} /> },
    // { id: 'UserManagement', title: 'Zarządzanie użytkownikami', content: <UserManagement handleImageClick={handleImageClick} /> },
    // { id: 'SEO', title: 'SEO i optymalizacja', content: <SEO handleImageClick={handleImageClick} /> },
    // { id: 'Security', title: 'Bezpieczeństwo', content: <Security handleImageClick={handleImageClick} /> },
    // { id: 'Troubleshooting', title: 'Rozwiązywanie problemów', content: <Troubleshooting handleImageClick={handleImageClick} /> },
    
  ];

  const renderContent = () => {
    if (isAuthenticated) {
      return (
        <div className='admin'>
          <nav className={`admin-navbar ${isNavOpen ? 'open' : ''}`}>
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} onClick={handleNavToggle}>{section.title}</a>
                </li>
              ))}
            </ul>
            {/* Dodanie logo na dole paska nawigacji */}
            <div className="nav-logo-container">
              <a href="https://gtcodelab.com" target="_blank" rel="noopener noreferrer">
                <img src="white_2.png" alt="GTCodelab Logo" className="nav-logo" />
              </a>
            </div>
          </nav>
          <button className={`burger-menu ${isNavOpen ? 'open' : ''}`} onClick={handleNavToggle}>
            ☰
          </button>
          <div className="admin-page">
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="http://www.centrumdyplomacji.pl" target="_blank" rel="noopener noreferrer">www.centrumdyplomacji.pl</a>
            </h1>
            {isPreviewVisible && (
              <div className="site-preview">
                <iframe src="http://www.centrumdyplomacji.pl" title="Podgląd strony" />
              </div>
            )}
            {sections.map(section => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
          {fullScreenImage && (
            <div className="fullscreen-overlay" onClick={handleFullScreenClose}>
              <img src={fullScreenImage} alt="Fullscreen" className="fullscreen-image" />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
        </div>
      );
    }
  };

  return (
    <main>
      {renderContent()}
    </main>
  );
}
