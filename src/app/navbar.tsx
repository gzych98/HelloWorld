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
          <img  src="/white_2.png"
                alt="Opis obrazu"
                width={50}
                height={50} 
                className="navbar_logo"
              />
          <ul className={isNavVisible ? "nav-active" : ""}>
            <li><a href="#page1">Home</a></li>
            <li><a href="#web_solutions">Web Solutions</a></li>
            <li><a href="#case_studies">Case studies</a></li>
            <li><a href="#form">Create Your Website</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>       
      </nav>
    );
};

export default NavBar;
