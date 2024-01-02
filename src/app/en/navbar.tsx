"use client"; // This is a client component

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
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
            <li><a href="#page1">Home</a></li>
            <li><a href="#web_solutions">Our Solutions</a></li>
            <li><a href="#form">Create Your Project</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a id='language' href="/">PL</a></li>
          </ul>
        </div>       
      </nav>
    );
};

export default NavBar;