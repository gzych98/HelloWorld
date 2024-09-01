import React from 'react';
import { auth } from '@/fireBase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { FaTasks, FaChartBar, FaInfoCircle, FaSignOutAlt, FaSignInAlt, FaUser, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC<{ isOpen: boolean, toggleSidebar: () => void }> = ({ isOpen, toggleSidebar }) => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        auth.signOut();
        toggleSidebar(); // Close sidebar after logout
    };

    return (
        <div className={`custom-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>AppName</h2>
            </div>
            <div className="custom-sidebar-links" onClick={toggleSidebar}>
                <Link to="/task-list" className="sidebar-link">
                    <FaTasks className="sidebar-icon" /> Lista Zadań
                </Link>
                <Link to="/statistics" className="sidebar-link">
                    <FaChartBar className="sidebar-icon" /> Statystyki
                </Link>
                <Link to="/info" className="sidebar-link">
                    <FaInfoCircle className="sidebar-icon" /> Informacje
                </Link>
                <Link to="/settings" className="sidebar-link">
                    <FaCog className="sidebar-icon" /> Ustawienia
                </Link>
            </div>
            <div className="user-panel">
                {user ? (
                    <div className="user-info">
                        <FaUser className="user-icon" />
                        <span>{user.displayName || user.email}</span>
                        <button onClick={handleLogout} className="logout-button">
                            <FaSignOutAlt className="button-icon" /> Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="login-link" onClick={toggleSidebar}>
                        <FaSignInAlt className="button-icon" /> Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
