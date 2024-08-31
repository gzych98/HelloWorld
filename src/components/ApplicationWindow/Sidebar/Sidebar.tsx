import React from 'react';
import { auth } from '@/fireBase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <div className="custom-sidebar">
            <h2>Sidebar</h2>
            <div className="custom-sidebar-links">
                <Link to="/task-list">Lista Zadań</Link>
                <Link to="/statistics">Statystyki</Link>
                <Link to="/info">Informacje</Link>
            </div>
            <div className="user-panel">
                {user ? (
                    <div>
                        <span>{user.displayName || user.email}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
