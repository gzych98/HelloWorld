"use client";
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import './styles_article.css';
import 'katex/dist/katex.min.css';
import katex from 'katex';

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'theorem', title: 'Twierdzenie Parsevala' },
    { id: 'intuition', title: 'Intuicja za Twierdzeniem Parsevala' },
    { id: 'applications', title: 'Zastosowania' },
    { id: 'examples', title: 'Przykład Obliczeń' },
    { id: 'implementation', title: 'Implementacja w Pythonie' },
    { id: 'conclusion', title: 'Podsumowanie' }
];

const title = "Twierdzenie Parsevala w Analizie Fouriera";
const date = "21 lipca 2024";
const coverImage = "/parseval-theorem.png";

const renderInlineMath = (mathString) => {
    return { __html: katex.renderToString(mathString, { throwOnError: false }) };
};

const renderBlockMath = (mathString, number = "") => {
    return {
        __html: katex.renderToString(mathString, {
            throwOnError: false,
            displayMode: true,
        }),
        'data-number': number
    };
};

const articleContent = {
    intro: (
        <div>
            <h2>Wprowadzenie</h2>
            <p>
                Twierdzenie Parsevala jest fundamentalnym wynikiem w analizie Fouriera, nazwanym na cześć francuskiego matematyka Marc-Antoine Parsevala. Twierdzenie to ustanawia ważną relację między transformatą Fouriera funkcji a samą funkcją. Mówiąc dokładniej, Twierdzenie Parsevala stwierdza, że całkowita energia sygnału w dziedzinie czasu jest równa całkowitej energii jego transformaty Fouriera w dziedzinie częstotliwości.
            </p>
        </div>
    ),
    theorem: (
        <div>
            <h2>Twierdzenie Parsevala</h2>
            <p>
                Dla funkcji <span dangerouslySetInnerHTML={renderInlineMath('f(t)')} /> z jej transformatą Fouriera <span dangerouslySetInnerHTML={renderInlineMath('\\hat{f}(\\omega)')} />, Twierdzenie Parsevala można zapisać jako:
            </p>
            <div className="katex-display" dangerouslySetInnerHTML={renderBlockMath(`\\int_{-\\infty}^{\\infty} |f(t)|^2 \\, dt = \\int_{-\\infty}^{\\infty} |\\hat{f}(\\omega)|^2 \\, d\\omega`, "(1)")}></div>
            <p>
                Twierdzenie to można również zapisać w kontekście dyskretnej transformaty Fouriera (DFT) dla sekwencji <span dangerouslySetInnerHTML={renderInlineMath('x[n]')} /> i jej DFT <span dangerouslySetInnerHTML={renderInlineMath('X[k]')} />:
            </p>
            <div className="katex-display" dangerouslySetInnerHTML={renderBlockMath(`\\sum_{n=0}^{N-1} |x[n]|^2 = \\frac{1}{N} \\sum_{k=0}^{N-1} |X[k]|^2`, "(2)")}></div>
        </div>
    ),
    intuition: (
        <div>
            <h2>Intuicja za Twierdzeniem Parsevala</h2>
            <p>
                Twierdzenie pokazuje, że całkowita moc lub energia zawarta w sygnale w dziedzinie czasu jest zachowana przy transformacji do dziedziny częstotliwości. Jest to kluczowe w przetwarzaniu sygnałów, gdzie pozwala inżynierom analizować zachowanie sygnału w obu dziedzinach bez utraty informacji dotyczących jego energii.
            </p>
        </div>
    ),
    applications: (
        <div>
            <h2>Zastosowania</h2>
            <p>
                Twierdzenie Parsevala znajduje zastosowanie w wielu dziedzinach, w tym:
            </p>
            <ul>
                <li>Przetwarzanie sygnałów: Pomaga w analizie i filtrowaniu sygnałów w dziedzinie częstotliwości przy zachowaniu spójności energetycznej.</li>
                <li>Telekomunikacja: Umożliwia zrozumienie i utrzymanie integralności sygnału przy konwersji między dziedziną czasu a dziedziną częstotliwości.</li>
                <li>Systemy sterowania: Stosowane w teorii sterowania do analizy energii sygnałów w systemach.</li>
            </ul>
        </div>
    ),
    examples: (
        <div>
            <h2>Przykład Obliczeń</h2>
            <p>
                Załóżmy, że mamy prosty sygnał <span dangerouslySetInnerHTML={renderInlineMath('f(t) = e^{-t^2}')} />. Jego transformata Fouriera to <span dangerouslySetInnerHTML={renderInlineMath('\\hat{f}(\\omega) = \\sqrt{\\pi} e^{-\\omega^2/4}')} />.
            </p>
            <p>Z wykorzystaniem Twierdzenia Parsevala:</p>
            <div className="katex-display" dangerouslySetInnerHTML={renderBlockMath(`\\int_{-\\infty}^{\\infty} e^{-2t^2} \\, dt = \\int_{-\\infty}^{\\infty} \\pi e^{-\\omega^2/2} \\, d\\omega`, "(3)")}></div>
            <p>Oba całki dadzą ten sam wynik, co ilustruje równość energii w obu dziedzinach.</p>
        </div>
    ),
    implementation: (
        <div>
            <h2>Implementacja w Pythonie</h2>
            <p>Poniżej znajduje się prosty przykład, jak można zaimplementować i zweryfikować Twierdzenie Parsevala w Pythonie:</p>
            <div className="code-block">
                <pre>
                    <code>
                        {`import numpy as np
import scipy.fft

# Definiowanie sygnału
N = 1024
t = np.linspace(0, 1, N)
f_t = np.sin(2 * np.pi * 10 * t)  # Przykładowy sygnał

# Obliczenie transformaty Fouriera
F_w = scipy.fft.fft(f_t)

# Obliczenie energii w dziedzinie czasu
energia_czas = np.sum(np.abs(f_t)**2)

# Obliczenie energii w dziedzinie częstotliwości
energia_czest = np.sum(np.abs(F_w)**2) / N

# Wynik
print(f"Energia w dziedzinie czasu: {energia_czas}")
print(f"Energia w dziedzinie częstotliwości: {energia_czest}")`}
                    </code>
                </pre>
            </div>
        </div>
    ),
    conclusion: (
        <div>
            <h2>Podsumowanie</h2>
            <p>
                Twierdzenie Parsevala to potężne narzędzie, które pozwala inżynierom i naukowcom analizować sygnały w obu dziedzinach, czasu i częstotliwości, bez utraty informacji o ich energii. Jego zastosowania obejmują szeroki zakres dziedzin, od przetwarzania sygnałów po telekomunikację i systemy sterowania.
            </p>
            <p>
                <strong>Chcesz dowiedzieć się więcej?</strong> Śledź nas na mediach społecznościowych i bądź na bieżąco z najnowszymi trendami w analizie Fouriera i przetwarzaniu sygnałów!
            </p>
        </div>
    )
};

const copyToClipboard = (code, setCopied) => {
    navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
        alert('Wystąpił błąd podczas kopiowania kodu');
    });
};

const ArticleSection = ({ section }) => (
    <Element name={section.id} id={section.id}>
        {articleContent[section.id]}
    </Element>
);

export default function ArticlePage() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = content.map(section => document.getElementById(section.id));
            const scrollPosition = window.scrollY + 200;

            const currentSection = sections.find(section => {
                return section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main>
            <NavBar02 />
            <div className="page" id="how-it-works">
                <div className="content-container">
                    <div className="toc">
                        <h2>Spis treści</h2>
                        <ul>
                            {content.map(section => (
                                <li key={section.id}>
                                    <Link
                                        to={section.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={0}
                                        className={activeSection === section.id ? 'active' : ''}
                                    >
                                        {section.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="article">
                        <div className="article-cover-container">
                            <img src={coverImage} alt="Article Cover" className="article-cover" />
                            <div className="cover-text">wygenerowano przy pomocy sztucznej inteligencji</div>
                        </div>
                        <header className="article-header">
                            <p className="date">{date}</p>
                            <h1 className="title">{title}</h1>
                        </header>
                        {content.map(section => (
                            <ArticleSection key={section.id} section={section} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer_pol />
        </main>
    );
}
