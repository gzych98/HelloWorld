import React from 'react';
import MainTemplate from '../../templates/main_template/main_template';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <div className="home-page">
        {/* Treści i komponenty specyficzne dla strony głównej */}
        <h1>Witaj na stronie głównej!</h1>
        {/* Możesz tutaj dodać więcej sekcji, np. <AboutSection />, <ContactSection />, itd. */}
      </div>
    </MainTemplate>
  );
};

export default HomePage;
