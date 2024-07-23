"use client";
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import './styles_article.css';
import DownloadForm from '@/components/DownloadForm/DownloadForm';

const content = [
    { id: 'app_description', title: 'Opis Aplikacji' },
    { id: 'workflow', title: 'Jak działa aplikacja' },
    { id: 'automation', title: 'Automatyzacja w pracy inżynierskiej' },
    { id: 'download', title: 'Pobierz Aplikację' },
];

export default function ArticlePage() {
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleImageClick = () => {
        setIsImageOpen(!isImageOpen);
    };

    const handleOverlayClick = () => {
        setIsImageOpen(false);
    };

    return (
        <MathJaxContext>
            <main>
                <NavBar02 />
                <div className={`image-overlay ${isImageOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
                    <img src="/img-to-chart-1.png" alt="Article Cover" className="image-fullscreen" />
                </div>
                <div className="page" id="how-it-works">
                    <div className="content-container">
                        <div className="article">
                            <div className="article-cover-container" onClick={handleImageClick}>
                                <img src="/img-to-chart-1.png" alt="Article Cover" className="article-cover" />
                                <div className="cover-text">Zrzut ekranu aplikacji i jej kod</div>
                            </div>
                            <header className="article-header">
                                <p className="date">24 lipca 2024</p>
                                <h1 className="title">Automatyzacja z Pythonem - Ułatw swoje codzienne zadania!</h1>
                            </header>
                            
                            <Element name="app_description" id="app_description">
                                <h2>Opis Aplikacji</h2>
                                <p>Ręczne przepisywanie danych z wykresów może być żmudne i czasochłonne. Dzięki Pythonowi można znacznie ułatwić sobie życie, automatyzując te zadania.</p>
                                <p>Narzędzie "Interactive Plot Point Picker" to przykład, jak Python może pomóc inżynierom i analitykom w codziennej pracy. Umożliwia ono łatwe odczytywanie danych z wykresów: wczytujesz obraz, zaznaczasz punkty, przeliczasz je na rzeczywiste wartości i eksportujesz wyniki do pliku CSV.</p>
                            </Element>
                            
                            <Element name="workflow" id="workflow">
                                <h2>Jak działa aplikacja</h2>
                                <p>Kroki do użycia aplikacji:</p>
                                <ol>
                                    <li>Załaduj obraz, używając przycisku "Load Image".</li>
                                    <li>Kliknij na cztery punkty na obrazie, aby ustawić osie (X1, X2, Y1, Y2).</li>
                                    <li>Wprowadź rzeczywiste wartości dla tych punktów w odpowiednich polach.</li>
                                    <li>Kliknij "Set Axes", aby zastosować te wartości.</li>
                                    <li>Kliknij na dowolne inne punkty na obrazie, aby zebrać punkty danych.</li>
                                    <li>Punkty będą wyświetlane w tabeli z ich rzeczywistymi współrzędnymi.</li>
                                    <li>Użyj "Plot Points", aby zobaczyć wybrane punkty na wykresie.</li>
                                    <li>"Clear Points" usunie wszystkie wybrane punkty.</li>
                                    <li>"Reset Axes" wyczyści punkty osi i wartości.</li>
                                </ol>
                            </Element>

                            <Element name="automation" id="automation">
                                <h2>Automatyzacja w pracy inżynierskiej</h2>
                                <p>Automatyzacja procesów to kluczowy element zwiększania efektywności pracy inżynierskiej. Wykorzystując Python, możesz zautomatyzować wiele żmudnych i powtarzalnych zadań, co pozwoli Ci skupić się na bardziej kreatywnych i wartościowych aspektach pracy. </p>
                                <p>Dzięki automatyzacji możesz:</p>
                                <ul>
                                    <li>Oszczędzać czas, redukując manualne przepisywanie danych.</li>
                                    <li>Zwiększać dokładność, eliminując błędy ludzkie.</li>
                                    <li>Usprawniać procesy analizy danych i generowania raportów.</li>
                                    <li>Integrując różne źródła danych, możesz tworzyć bardziej kompleksowe analizy.</li>
                                </ul>
                                <p>Python oferuje szeroki wachlarz bibliotek i narzędzi, które mogą być dostosowane do specyficznych potrzeb każdego projektu inżynierskiego. Warto inwestować w naukę tego języka, aby maksymalnie wykorzystać jego potencjał.</p>
                            </Element>

                            <Element name="download" id="download">
                                <h2>Pobierz Aplikację</h2>
                                <DownloadForm />
                                <p>Obserwuj nas na social media, aby być na bieżąco z naszymi nowościami i aktualizacjami! Link do naszego Facebooka znajdziesz w kafelku podążającym za scrollem po lewej stronie ekranu.</p>
                            </Element>
                        </div>
                    </div>
                </div>
                <Footer_pol />
            </main>
        </MathJaxContext>
    );
}
