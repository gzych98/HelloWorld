import React, { useState } from 'react';
import './Statistics.css';

const StatisticsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'myData' | 'leaderboard'>('myData');

    const renderContent = () => {
        if (activeTab === 'myData') {
            return <div>Moje dane: tutaj będą wyświetlane statystyki użytkownika.</div>;
        } else if (activeTab === 'leaderboard') {
            return <div>Lista najlepszych: tutaj będą wyświetlane statystyki innych użytkowników.</div>;
        }
    };

    return (
        <div className="statistics-page">
            <h3>Statystyki</h3>
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'myData' ? 'active' : ''}`}
                    onClick={() => setActiveTab('myData')}
                >
                    Moje dane
                </button>
                <button
                    className={`tab-button ${activeTab === 'leaderboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('leaderboard')}
                >
                    Lista najlepszych
                </button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default StatisticsPage;
