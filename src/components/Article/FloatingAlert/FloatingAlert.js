import React, { useEffect, useState } from 'react';
import './styles_floating_alert.css';

const FloatingAlert = ({ message, duration }) => {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => prev + 1);
        }, duration / 100);

        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [duration]);

    return (
        visible && (
            <div className="floating-alert">
                <div className="alert-message">{message}</div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        )
    );
};

export default FloatingAlert;
