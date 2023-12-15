import React from 'react';
import './nav-item.css';

interface NavigationItemProps {
  href: string;
  title: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, title }) => {
  return (
    <li className="navigation-item">
      <a href={href}>{title}</a>
    </li>
  );
};

export default NavigationItem;
