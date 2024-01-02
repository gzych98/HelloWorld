"use client"; // This is a client component

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar_pol: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav>
      <div className='navbar'>
        <div className="burger-icon" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <img
          src="/white_2.png"
          alt="Logo"
          width={50}
          height={50}
          className={`navbar_logo ${isNavVisible ? 'hide-logo' : ''}`}
        />
        <ul className={isNavVisible ? "nav-active" : ""}>
          <li><a href="/">Strona domowa</a></li>
          <li><a href="/#web_solutions">Nasze Rozwiązania</a></li>
          <li><a href="/#form">Zrealizuj swój projekt</a></li>
          <li><a href="/#contact">Kontakt</a></li>
          <li><a id='language' href="/how-it-works.html">Jak to działa?</a></li>
          {/* <li><a id='language' href="/">EN</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar_pol;