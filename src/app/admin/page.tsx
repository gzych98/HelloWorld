"use client";
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useState, useEffect } from 'react';
import './admin.css'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Here you can check the password against a stored value
    // For simplicity, I'm using a hardcoded password
    const storedPassword = 'jamnik123'; // Replace with your actual password
    if (password === storedPassword) {
      setIsAuthenticated(true);
    }
  }, [password]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {   
    setPassword(event.target.value);
  };
  

  const renderContent = () => {
    if (isAuthenticated) {
      return (
        <div className='admin'>
          <div className="admin-navbar">
            <p>Pasek.........................</p>
          </div>
          <div className="admin-page">
            <h1>Strona administratora</h1>
            {/* Tutaj możesz dodać zawartość strony administratora */}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ height: '80vh' ,display:'flex', alignItems:'center', justifyContent:'center'}}>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Enter password"
          />
        </div>
      );
    }
  };

  return (
    <main>
      {renderContent()}
    </main>
  );
}
