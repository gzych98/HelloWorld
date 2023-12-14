import React from 'react';
import Logo from './Logo';
import NavigationList from './NavigationList';
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
