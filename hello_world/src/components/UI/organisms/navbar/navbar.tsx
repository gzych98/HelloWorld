import React from 'react';
import Logo from '../../atoms/Logo/button_logo';
import NavigationList from '../../molecules/nav_list/navigationlist';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <Logo />
      <NavigationList />
    </header>
  );
};

export default Navbar;
