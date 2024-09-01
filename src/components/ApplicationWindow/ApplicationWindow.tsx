import React, { useState, useEffect } from 'react';
import './aplikacja.css';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const ApplicationWindow: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        console.log('ApplicationWindow mounted');
    }, []);

    return (
        <div className="app-container">
            <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                <FaBars />
            </button>
            <div className={`app-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ApplicationWindow;
