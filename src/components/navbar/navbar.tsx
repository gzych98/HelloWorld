'use client'
import { useState, useEffect } from 'react';
import './navbar.css'
import '../../app/styles/globals.css'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar02: React.FC = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleNav();
  }

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    if (isDropdownOpen2) {
      setIsDropdownOpen2(false);
    }
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    if (isDropdownOpen1) {
      setIsDropdownOpen1(false);
    }
  };

  useEffect(() => {
    const closeDropdowns = (event: MouseEvent) => {
      if (event.target && !(event.target as Element).matches('.dropdown-toggle')) {
        setIsDropdownOpen1(false);
        setIsDropdownOpen2(false);
      }
    };

    document.addEventListener('click', closeDropdowns);

    return () => {
      document.removeEventListener('click', closeDropdowns);
    };
  }, []);

  return (
    <nav>
      <div className='navbar'>
        <div className='nav-logo disp-flex-row-hcentered-vcentered'>
          <a href="/">
            <img
              src="/white_2.png"
              alt="Logo"
              width={50}
              height={50}
              className={`navbar-logo ${isMenuOpen ? 'show-logo' : ''}`}
            />
          </a>

          <div className='padding-left-1-5em'>
          </div>
          <a href="/" className='' id='title'>GT Code Lab</a>
        </div>
        <button className='button-navbar-menu' type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="menu-icon fa-1x" />
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <ul className='nav-main-ul'>
            <li>
              <a href="/#contact" onClick={toggleMenu}>Kontakt</a>
            </li>
            <li>
              <a href="/poradniki" onClick={toggleMenu}>Poradniki</a>
            </li>
            <li>
              <a className="dropdown-toggle show-pointer" onClick={toggleDropdown1}>Nasza oferta</a>
              <ul className={`navbarDropdown ${isDropdownOpen1 ? 'show' : ''}`}>
                <li><a href="/#service-www" onClick={toggleMenu}>Strony WWW</a></li>
                <li><a href="/#service-visual" onClick={toggleMenu}>Identyfikacja wizualna</a></li>
                <li><a href="/#" onClick={toggleMenu}>Aplikacje</a></li>
                <li><a href="/prosty-timer" onClick={toggleMenu}>Prosty timer</a></li>
              </ul>
            </li>
            <li><a id='language' href="/how-it-works">Jak to działa?</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar02;
