import React from 'react';
import NavigationItem from '../atoms/navigation_item';

const NavigationList: React.FC = () => {
  return (
    <ul className="navigation-list">
      <NavigationItem href="/" title="Link 01" />
      <NavigationItem href="/about" title="Link 02" />
      <NavigationItem href="/contact" title="Link 03" />
    </ul>
  );
};

export default NavigationList;
