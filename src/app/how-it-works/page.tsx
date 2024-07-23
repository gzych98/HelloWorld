"use client"
import React, { useState } from 'react';
import Footer_pol from '../footer';
import NavBar_pol from '../navbar';
import './howItWorks.css'
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
            <div className="page first_page">
                <div className="content-container">
                    <div className="Column-width-50 display-left" >
                        <h1>Jak to działa?</h1>
                        <p>Od koncepcji po kliknięcie – kreujemy strony, które działają. Proces? Prosty i przejrzysty. Twoje pomysły przekształcamy w funkcjonalne projekty, które przemawiają designem i technologią.</p>
                    </div>
                    <div className="Column-width-50 image" id='how-it-works'>
                    </div>
                </div>
            </div>
            <div className="page">
                <div className="content-container highlight">
                    <div className="Column width-20" >
                        <FontAwesomeIcon icon={faPenToSquare} className={`my-icon fa-3x ${hover1 ? 'active' : ''}`} color={hover1 ? '#2B70E4' : '#333'} />
                    </div>
                    <div className="Column width-80 display-left border"
                        onMouseEnter={() => setHover1(true)}
                        onMouseLeave={() => setHover1(false)}>
                        <h2>Nie wiesz od czego zacząć?</h2>
                        <h1>Wypełnij formularz kontaktowy</h1>
                        <p>Masz pytania lub potrzebujesz konsultacji dotyczącej Twojego przyszłego projektu? Nasz formularz kontaktowy to pierwszy krok do zrozumienia Twoich potrzeb i oczekiwań. Skontaktuj się z nami, abyśmy mogli omówić Twój pomysł i przedstawić Ci najlepsze możliwe rozwiązania, które pozwolą Twojej marce zaistnieć w cyfrowym świecie.</p>
                        <a href='/#form'>
                            <button className='button-dark'>Wypełnij teraz</button>
                        </a>
                    </div>
                </div>
                <div className="content-container highlight">
                    <div className="Column width-20" >
                        <FontAwesomeIcon icon={faSliders} className={`my-icon fa-3x ${hover2 ? 'active' : ''}`} color={hover2 ? '#2B70E4' : '#333'} />
                    </div>
                    <div className="Column width-80 display-left border"
                        onMouseEnter={() => setHover2(true)}
                        onMouseLeave={() => setHover2(false)}>
                        <h2>Gdy już masz pomysł</h2>
                        <h1>Prześlij szczegóły swojego projektu</h1>
                        <p>Gotowy, aby ruszyć z projektem? Prześlij nam szczegóły, a my zajmiemy się resztą. Opowiedz nam więcej o Twojej wizji, celach oraz wymaganiach funkcjonalnych. Na tej podstawie przygotujemy wstępną koncepcję i wycenę projektu, zapewniając, że wszystkie Twoje potrzeby zostaną spełnione.</p>
                    </div>
                </div>
                <div className="content-container highlight">
                    <div className="Column width-20" >
                        <FontAwesomeIcon icon={faCloudArrowUp} className={`my-icon fa-3x ${hover3 ? 'active' : ''}`} color={hover3 ? '#2B70E4' : '#333'} />
                    </div>
                    <div className="Column width-80 display-left border"
                        onMouseEnter={() => setHover3(true)}
                        onMouseLeave={() => setHover3(false)}>
                        <h2>A teraz detale</h2>
                        <h1>Udostępnij dodatkowe pliki</h1>
                        <p>Jeżeli masz dodatkowe materiały, takie jak logo, grafiki czy treści, które chcesz umieścić na swojej stronie, możesz je przesłać za pomocą naszego bezpiecznego formularza. Zapewniamy, że wszystkie pliki zostaną wykorzystane zgodnie z Twoją wizją projektu.</p>
                        <p><u>Możemy również wykonać za Ciebie identyfikację wizualną!</u></p>
                    </div>
                </div>
                <div className="content-container highlight">
                    <div className="Column width-20" >
                        <FontAwesomeIcon icon={faScrewdriverWrench} className={`my-icon fa-3x ${hover4 ? 'active' : ''}`} color={hover4 ? '#2B70E4' : '#333'} />
                    </div>
                    <div className="Column width-80 display-left border"
                        onMouseEnter={() => setHover4(true)}
                        onMouseLeave={() => setHover4(false)}>
                        <h2>Ostatnia prosta</h2>
                        <h1>Realizacja projektu</h1>
                        <p>Każdy projekt to dla nas nowa historia do opowiedzenia. Zaczynamy od szczegółowej analizy Twoich potrzeb, następnie przechodzimy do kreacji i implementacji. Nasz zespół dba o to, by każdy szczegół był dopracowany i aby efekt końcowy przekroczył Twoje oczekiwania.</p>
                    </div>
                </div>
                <div className="content-container highlight">
                    <div className="Column width-20" >
                        <FontAwesomeIcon icon={faChartLine} className={`my-icon fa-3x ${hover5 ? 'active' : ''}`} color={hover5 ? '#2B70E4' : '#333'} />
                    </div>
                    <div className="Column width-80 display-left border"
                        onMouseEnter={() => setHover5(true)}
                        onMouseLeave={() => setHover5(false)}>
                        <h2>Gotowe!</h2>
                        <h1>Rozwijaj swój biznes dzięki nowej stronie!</h1>
                        <p>W dobie cyfrowej transformacji obecność w internecie jest kluczowa. Profesjonalna strona internetowa to fundament sukcesu Twojego biznesu. Pomożemy Ci zaprojektować i zbudować platformę, która nie tylko będzie wizytówką Twojej firmy, ale również narzędziem sprzedażowym i komunikacyjnym.</p>
                    </div>
                </div>
            </div>
            <Footer_pol />
        </main >
    )
}
