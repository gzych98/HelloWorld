import React, { useState, useEffect } from 'react';
import './aplikacja.css';
import Sidebar from './Sidebar/Sidebar';
import { Task } from './TaskList/TaskList';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const ApplicationWindow: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleActivateTask = (task: Task) => {
        setActiveTask(task);
        if (!isSidebarOpen) {
            setIsSidebarOpen(true); // Otwórz sidebar automatycznie po aktywacji zadania
        }
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
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activeTask={activeTask} />
                <div className="main-content">
                    {/* Przekazanie funkcji onActivateTask poprzez Outlet */}
                    <Outlet context={{ onActivateTask: handleActivateTask }} />
                </div>
            </div>
        </div>
    );
};

export default ApplicationWindow;
