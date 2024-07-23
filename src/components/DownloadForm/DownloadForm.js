import React, { useState } from 'react';
import './DownloadForm.css';

const DownloadForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('../../pages/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject: 'Prośba o pobranie aplikacji',
                    message: 'Użytkownik poprosił o pobranie aplikacji.',
                    formData: {
                        email,
                        name: '', // Możesz dodać dodatkowe pola, jeśli chcesz
                        additionalNotes: '' // Możesz dodać dodatkowe pola, jeśli chcesz
                    }
                }),
            });

            const result = await response.json();
            if (response.status === 200) {
                setMessage('Email wysłany pomyślnie! Możesz teraz pobrać aplikację.');
            } else {
                setMessage(`Nie udało się wysłać emaila: ${result.message}`);
            }
        } catch (error) {
            setMessage(`Nie udało się wysłać emaila: ${error.message}`);
        }
    };

    return (
        <div className="download-form-container">
            <form onSubmit={handleSubmit} className="download-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn-submit">Wyślij</button>
            </form>
            {message && <p className="form-message">{message}</p>}
            {message === 'Email wysłany pomyślnie! Możesz teraz pobrać aplikację.' && (
                <a href="https://prostytimer.pl/wp-content/uploads/2024/05/Prosty-Timer-Setup-1-0-0.zip/image+to+chart.exe" download className="btn-download">Pobierz aplikację</a>
            )}
        </div>
    );
};

export default DownloadForm;
