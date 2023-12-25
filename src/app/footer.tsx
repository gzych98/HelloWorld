// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <img  src="/white_2.png"
              alt="Opis obrazu"
              width={100}
              height={100} 
              className="footer_logo"
            />
      <p>Copyright © {new Date().getFullYear()} GT Code Lab</p>
    </footer>
  );
};
export default Footer;
