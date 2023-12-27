"use client";
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useState, useEffect } from 'react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Here you can check the password against a stored value
    // For simplicity, I'm using a hardcoded password
    const storedPassword = 'admin'; // Replace with your actual password
    if (password === storedPassword) {
      setIsAuthenticated(true);
    }
  }, [password]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const renderContent = () => {
    if (isAuthenticated) {
      return (
        <div className="page" id="page1">
          <div className="background" id="home">
            <div className="content-container" id='home'>
              <h1>Admin page</h1>
            </div>
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
