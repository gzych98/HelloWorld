"use client";
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import './styles_article.css';

const title = "Wprowadzenie do Digital Signal Processing (DSP)";
const date = "22 lipca 2024";
const coverImage = "/dsp-podstawy.png";

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'setup', title: 'Podstawy DSP' },
    { id: 'config', title: 'Filtry cyfrowe' },
    { id: 'docstrings', title: 'Transformacje sygnałów' },
    { id: 'building', title: 'Zastosowania DSP' },
    { id: 'automation', title: 'Narzędzia i biblioteki' },
    { id: 'summary', title: 'Podsumowanie' }
];

const markdownContent = {
    intro: `

Digital Signal Processing (DSP) to technika przetwarzania sygnałów cyfrowych, która znajduje zastosowanie w wielu dziedzinach, takich jak telekomunikacja, audio, obrazowanie medyczne i wiele innych. W tym artykule omówimy podstawowe zagadnienia DSP, jego zastosowania oraz narzędzia, które można wykorzystać w praktyce. Poradniki zawierają również przykładowy kod z objaśnieniami, dzięki czemu możesz łatwo zrozumieć i zastosować przedstawione rozwiązania. Każdy fragment kodu można skopiować do swojego edytora tekstu, co znacznie ułatwia naukę i wdrażanie nowych umiejętności.
    `,
    setup: `
## Podstawy DSP

DSP polega na cyfrowym przetwarzaniu sygnałów analogowych. Sygnały te są najpierw próbkowane i kwantyzowane, a następnie przetwarzane za pomocą algorytmów cyfrowych. Proces ten obejmuje operacje takie jak filtrowanie, transformacje, analizę częstotliwościową i wiele innych.

\`\`\`python
import numpy as np

# Przykładowy sygnał
fs = 1000  # Częstotliwość próbkowania
t = np.arange(0, 1, 1/fs)
f = 5  # Częstotliwość sygnału
signal = np.sin(2 * np.pi * f * t)

# Wyświetlenie sygnału
import matplotlib.pyplot as plt
plt.plot(t, signal)
plt.xlabel('Czas [s]')
plt.ylabel('Amplituda')
plt.title('Przykładowy sygnał sinusoidalny')
plt.show()
\`\`\`

    `,
    config: `
## Filtry cyfrowe

Filtry cyfrowe są kluczowym elementem DSP, umożliwiającym modyfikację sygnałów poprzez usuwanie szumów, wyodrębnianie interesujących częstotliwości i wiele innych zastosowań. Filtry można podzielić na filtry FIR (Finite Impulse Response) i IIR (Infinite Impulse Response).

\`\`\`python
from scipy.signal import butter, lfilter

# Filtr dolnoprzepustowy Butterwortha
def butter_lowpass(cutoff, fs, order=5):
    nyq = 0.5 * fs
    normal_cutoff = cutoff / nyq
    b, a = butter(order, normal_cutoff, btype='low', analog=False)
    return b, a

def lowpass_filter(data, cutoff, fs, order=5):
    b, a = butter_lowpass(cutoff, fs, order=order)
    y = lfilter(b, a, data)
    return y

# Przykład zastosowania filtra
cutoff = 2.5  # Częstotliwość odcięcia
filtered_signal = lowpass_filter(signal, cutoff, fs)

plt.plot(t, signal, label='Oryginalny sygnał')
plt.plot(t, filtered_signal, label='Przefiltrowany sygnał', linestyle='--')
plt.xlabel('Czas [s]')
plt.ylabel('Amplituda')
plt.legend()
plt.title('Filtracja dolnoprzepustowa')
plt.show()
\`\`\`

    `,
    docstrings: `
## Transformacje sygnałów

Transformacje sygnałów są nieodłącznym elementem DSP. Najpopularniejszą transformacją jest transformacja Fouriera, która pozwala na analizę częstotliwościową sygnałów.

\`\`\`python
from scipy.fftpack import fft

# Transformacja Fouriera
signal_fft = fft(signal)
frequencies = np.fft.fftfreq(len(signal), 1/fs)

# Wyświetlenie widma sygnału
plt.plot(frequencies, np.abs(signal_fft))
plt.xlabel('Częstotliwość [Hz]')
plt.ylabel('Amplituda')
plt.title('Widmo sygnału')
plt.show()
\`\`\`

    `,
    building: `
## Zastosowania DSP

DSP znajduje zastosowanie w wielu dziedzinach. Oto kilka przykładów:

- **Telekomunikacja**: Przetwarzanie sygnałów w celu kompresji danych, korekcji błędów i modulacji.
- **Audio**: Redukcja szumów, efekty dźwiękowe i kodowanie audio.
- **Obrazowanie medyczne**: Poprawa jakości obrazów, wykrywanie krawędzi i rekonstrukcja obrazów.
- **Radar i sonar**: Analiza sygnałów odbitych w celu wykrywania i śledzenia obiektów.

    `,
    automation: `
## Narzędzia i biblioteki

Istnieje wiele narzędzi i bibliotek, które ułatwiają pracę z DSP. Oto kilka z nich:

- **NumPy**: Podstawowa biblioteka do obliczeń numerycznych w Pythonie.
- **SciPy**: Rozszerzenie NumPy o dodatkowe funkcje do przetwarzania sygnałów.
- **Matplotlib**: Biblioteka do wizualizacji danych.
- **Pandas**: Biblioteka do analizy danych, szczególnie przydatna do pracy z czasowymi seriami danych.

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import butter, lfilter

# Przykład przetwarzania sygnału za pomocą biblioteki SciPy
fs = 1000  # Częstotliwość próbkowania
t = np.linspace(0, 1, fs, endpoint=False)
f = 5  # Częstotliwość sygnału
signal = np.sin(2 * np.pi * f * t)

# Filtr dolnoprzepustowy
cutoff = 2.5
b, a = butter(4, cutoff / (0.5 * fs), btype='low')
filtered_signal = lfilter(b, a, signal)

# Wyświetlenie wyników
plt.plot(t, signal, label='Oryginalny sygnał')
plt.plot(t, filtered_signal, label='Przefiltrowany sygnał', linestyle='--')
plt.xlabel('Czas [s]')
plt.ylabel('Amplituda')
plt.legend()
plt.title('Przykład przetwarzania sygnału za pomocą SciPy')
plt.show()
\`\`\`

    `,
    summary: `
## Podsumowanie

Digital Signal Processing (DSP) to kluczowa technika przetwarzania sygnałów cyfrowych, znajdująca zastosowanie w wielu dziedzinach techniki. Dzięki odpowiednim narzędziom i bibliotekom, DSP umożliwia efektywne przetwarzanie, analizę i interpretację sygnałów. Mamy nadzieję, że ten artykuł wprowadził Cię w podstawowe zagadnienia DSP i zachęcił do dalszej nauki oraz eksperymentowania z tą fascynującą dziedziną.
    `
};


const copyToClipboard = (code, setCopied) => {
    navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
        alert('Wystąpił błąd podczas kopiowania kodu');
    });
};

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    return (
        <div className="code-block" onClick={() => copyToClipboard(code)}>
            <pre>{code}</pre>
            <div className="copy-hint">{copied ? "Skopiowano" : "Kliknij żeby skopiować"}</div>
        </div>
    );
};

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
                                        duration={500}
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
                            <Element key={section.id} name={section.id} id={section.id}>
                                <ReactMarkdown
                                    components={{
                                        code({node, inline, className, children, ...props}) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                                <CodeBlock code={String(children).replace(/\n$/, '')} />
                                            ) : (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            )
                                        }
                                    }}
                                >
                                    {markdownContent[section.id]}
                                </ReactMarkdown>
                            </Element>
                        ))}
                    </div>
                </div>
            </div>
            <Footer_pol />
        </main>
    );
}
