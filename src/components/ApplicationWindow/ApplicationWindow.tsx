import React, { useEffect } from 'react';
import './aplikacja.css';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const ApplicationWindow: React.FC = () => {
    useEffect(() => {
        console.log('ApplicationWindow mounted');
    }, []);

    return (
        <div className="app-container">
            <div className="app-content">
                <Sidebar />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ApplicationWindow;
