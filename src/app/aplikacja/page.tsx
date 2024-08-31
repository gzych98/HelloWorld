"use client";

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../../fireBase/AuthContext';
import SignIn from '../../fireBase/SignIn';
import SignUp from '../../fireBase/SignUp';
import Footer_pol from '../footer';
import NavBar02 from '@/components/navbar/navbar';
import ApplicationWindow from '@/components/ApplicationWindow/ApplicationWindow';
import TaskListPage from '@/components/ApplicationWindow/TaskList/TaskList';
import InfoPage from '@/components/ApplicationWindow/Info/Info';
import Settings from '@/components/ApplicationWindow/Settings/Settings';
import Statistics from '@/components/ApplicationWindow/Statistics/Statistics';
import './aplikacja.css';
import SettingsPage from '@/components/ApplicationWindow/Settings/Settings';

const LoginPage = () => {
  const { currentUser } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    console.log('Current User:', currentUser);
  }, [currentUser]);

  return (
    <div className="app-container">
      <NavBar02 />
      <div className="login-container">
        {currentUser ? (
          <Router basename="/aplikacja">
            <Routes>
              <Route path="/" element={<ApplicationWindow />}>
                <Route index element={<Navigate to="task-list" />} />
                <Route path="task-list" element={<TaskListPage />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="info" element={<InfoPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Routes>
          </Router>
        ) : (
          <div className="login-form">
            {isSignUp ? <SignUp /> : <SignIn />}
            <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        )}
      </div>
      {/* <Footer_pol /> */}
    </div>
  );
};

export default LoginPage;
