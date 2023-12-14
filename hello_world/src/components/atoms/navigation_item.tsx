import React from 'react';
import './NavigationItem.css';

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