"use client"
import React, { useState } from 'react';
import Footer_pol from '../footer';
import NavBar_pol from '../navbar';
import './takeYourTime.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faRankingStar, faPenToSquare, faChartLine, faCloudArrowUp, faScrewdriverWrench, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar02 from '@/components/navbar/navbar';



export default function HowItWorks() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    return (
        <main>
            <NavBar02 />
            <div className="page first_page" id='take-your-time-hero'>
                <div className="content-container">
                    <div className="Column-width-50 display-left" >
                        <h2>Take yout time!</h2>
                        <h1>Prosty Time</h1>
                        <p>Rozwijaj się każdego dnia! Aplikacja motywująca do osiągania celów, zdobywania umiejętności i nieustannego samodoskonalenia.</p>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.prostytimer.pl'>
                            <button className='button-dark'>Pobierz</button>
                        </a>
                    </div>
                    <div className="Column-width-50 image" id='how-it-works'>
                    </div>
                </div>
            </div>
            <Footer_pol />
        </main >
    )
}
