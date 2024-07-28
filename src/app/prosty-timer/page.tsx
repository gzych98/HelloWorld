"use client"
import React from 'react';
import Footer_pol from '../footer';
import NavBar02 from '@/components/navbar/navbar';
import './takeYourTime.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLightbulb, faTasks, faRobot, faChartLine, faListCheck } from '@fortawesome/free-solid-svg-icons';




export default function HowItWorks() {
    return (
        <main>
            <NavBar02 />
            <section className="hero-section" id="take-your-time-hero">
                <div className="content-container">
                    <div className="text-column">
                        <h2>Take your time!</h2>
                        <h1>Prosty Timer</h1>
                        <p>Rozwijaj się każdego dnia! Aplikacja motywująca do osiągania celów, zdobywania umiejętności i nieustannego samodoskonalenia.</p>
                        <ul className="features-list">
                            <li><FontAwesomeIcon icon={faClock} className="fa-icon" /> Ustaw czas odliczania, nadaj etykietę i kliknij start. To wszystko!</li>
                            <li><FontAwesomeIcon icon={faLightbulb} className="fa-icon" /> Brak zbędnych funkcji, tylko to, co naprawdę potrzebne.</li>
                            <li><FontAwesomeIcon icon={faChartLine} className="fa-icon" /> Aplikacja zbiera dane o Twojej pracy, pomagając Ci lepiej zarządzać swoim czasem.</li>
                            <li><FontAwesomeIcon icon={faTasks} className="fa-icon" /> Działa zarówno na Windows, jak i macOS.</li>
                        </ul>
                        <a target="_blank" rel="noopener noreferrer" href="https://prostytimer.pl/index.php/sklep/">
                            <button className="button-dark">Pobierz</button>
                        </a>
                    </div>
                    <div className="image-column">
                        <a href="https://prostytimer.pl/index.php/sklep/" target="_blank">
                            <img src="/app_1.png" alt="Prosty Timer app screenshot" className="image" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="info-section" id="info-section">
                <div className="content-container">
                    <div className="full-width-column">
                        <h1>Dlaczego warto zarządzać swoim czasem?</h1>
                        <ul className="info-list">
                            <li><FontAwesomeIcon icon={faClock} className="fa-icon" /> Dobre zarządzanie czasem pozwala na wykonanie więcej zadań w krótszym czasie, co zwiększa produktywność.</li>
                            <li><FontAwesomeIcon icon={faLightbulb} className="fa-icon" />  Planowanie i organizacja pomagają uniknąć chaosu i niepotrzebnego stresu.</li>
                            <li><FontAwesomeIcon icon={faTasks} className="fa-icon" /> Umożliwia skoncentrowanie się na priorytetach i długoterminowych celach, co prowadzi do większych osiągnięć.</li>
                        </ul>
                        <h1>Jak Prosty Timer może Ci pomóc?</h1>
                        <ul className="info-list">
                            <li><FontAwesomeIcon icon={faRobot} className="fa-icon" /> Automatyzuje mierzenie czasu pracy nad zadaniami, pozwalając skupić się na ich wykonaniu.</li>
                            <li><FontAwesomeIcon icon={faChartLine} className="fa-icon" /> Zbiera dane o Twojej pracy, pomagając lepiej zarządzać czasem i wyciągać wnioski.</li>
                            <li><FontAwesomeIcon icon={faListCheck} className="fa-icon" /> Brak zbędnych funkcji, tylko to, co naprawdę potrzebne, aby wspierać efektywność.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer_pol />
        </main>
    );
}
