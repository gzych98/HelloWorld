"use client";
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import './styles_article.css';

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'mechanics', title: 'Czym jest Machine Learning?' },
    { id: 'programming', title: 'Rodzaje uczenia maszynowego' },
    { id: 'math', title: 'Głębokie Uczenie (Deep Learning)' },
    { id: 'code', title: 'Biblioteki AI' }
];

const markdownContent = {
    intro: `
## Wprowadzenie

Sztuczna inteligencja (AI) to dziedzina nauki, która zajmuje się tworzeniem systemów zdolnych do wykonywania zadań wymagających inteligencji ludzkiej. Systemy te mogą uczyć się na podstawie danych, podejmować decyzje, rozpoznawać wzorce i automatyzować skomplikowane procesy. W przemyśle, AI jest wykorzystywana do optymalizacji produkcji, predykcji awarii, analizy danych i wielu innych zastosowań.

W ciągu ostatnich kilku dekad AI przekształciła się z teoretycznej koncepcji w praktyczną technologię, która rewolucjonizuje różne sektory przemysłu. Od automatyzacji procesów produkcyjnych po zaawansowane systemy rekomendacyjne, AI staje się kluczowym elementem strategii biznesowych na całym świecie. Wprowadzenie do AI zaczniemy od omówienia jednej z jej najważniejszych dziedzin - Machine Learning (ML).
    `,
    mechanics: `
## Czym jest Machine Learning?

Machine Learning (ML), czyli uczenie maszynowe, to poddziedzina AI, która polega na tworzeniu algorytmów uczących się na podstawie danych. Zamiast programować każdy krok działania systemu, twórcy ML dostarczają algorytmy, które same identyfikują wzorce i uczą się, jak wykonywać zadania. Dzięki temu systemy ML mogą adaptować się do nowych danych i doskonalić swoje działania bez konieczności ingerencji człowieka.

ML znajduje zastosowanie w wielu dziedzinach, takich jak analiza danych, rozpoznawanie obrazów, przetwarzanie języka naturalnego i wiele innych. Algorytmy ML są w stanie przetwarzać ogromne ilości danych, ucząc się na ich podstawie i wyciągając wnioski, które mogą być następnie wykorzystane do podejmowania decyzji.

Istnieje wiele rodzajów algorytmów ML, każdy dostosowany do innego typu problemu. Przykłady to regresja liniowa, drzewa decyzyjne, sieci neuronowe i wiele innych. Każdy z tych algorytmów ma swoje unikalne właściwości i jest stosowany w zależności od specyfiki zadania.
    `,
    programming: `
## Rodzaje uczenia maszynowego

1. **Uczenie nadzorowane (Supervised Learning)**: Algorytm uczy się na podstawie zbioru danych wejściowych i odpowiednich wyników. Przykłady obejmują klasyfikację, gdzie model przewiduje kategorię, do której należy nowy przykład (np. klasyfikacja obrazów jako kot lub pies), oraz regresję, gdzie model przewiduje ciągłą wartość liczbową (np. prognozowanie cen nieruchomości).

2. **Uczenie nienadzorowane (Unsupervised Learning)**: Algorytm analizuje dane wejściowe bez znanych wyników, aby znaleźć ukryte wzorce. Przykłady to klasteryzacja, gdzie algorytm grupuje podobne dane (np. segmentacja klientów), oraz redukcja wymiarów, która upraszcza dane, zachowując ich istotne właściwości (np. analiza głównych składowych).

3. **Uczenie przez wzmacnianie (Reinforcement Learning)**: Algorytm uczy się poprzez interakcję z otoczeniem, otrzymując nagrody lub kary za swoje działania. Celem jest maksymalizacja długoterminowej nagrody. Przykłady obejmują robotykę (np. nauka chodzenia) i gry komputerowe (np. algorytmy pokonujące ludzkich graczy).

Uczenie nadzorowane jest najczęściej stosowanym typem ML, szczególnie w zadaniach, gdzie dostępne są duże zbiory danych oznaczonych. Uczenie nienadzorowane jest używane do odkrywania ukrytych struktur w danych, co jest szczególnie przydatne w eksploracyjnej analizie danych. Uczenie przez wzmacnianie jest z kolei stosowane w systemach autonomicznych, gdzie decyzje muszą być podejmowane w czasie rzeczywistym na podstawie dynamicznie zmieniającego się środowiska.
    `,
    math: `
## Głębokie Uczenie (Deep Learning)

Deep Learning (DL), czyli głębokie uczenie, to poddziedzina ML, która koncentruje się na tworzeniu i trenowaniu sieci neuronowych z wieloma warstwami (głębokimi sieciami). Te warstwy umożliwiają modelowi uczenie się na różnych poziomach abstrakcji, co jest szczególnie przydatne w analizie obrazów, dźwięku i tekstu.

### Sieci neuronowe

Sieć neuronowa składa się z neuronów, które są połączone w warstwy. Każdy neuron przetwarza dane wejściowe i przekazuje wynik do kolejnych neuronów. W głębokich sieciach neuronowych (DNN) istnieje wiele warstw między warstwą wejściową a wyjściową, co pozwala na bardziej złożone przetwarzanie danych.

Głębokie uczenie zyskało popularność dzięki swojej zdolności do osiągania niespotykanych wcześniej wyników w zadaniach takich jak rozpoznawanie mowy, analiza obrazów i przetwarzanie języka naturalnego. To właśnie głębokie sieci neuronowe stoją za wieloma przełomami w AI, umożliwiając tworzenie systemów, które mogą przewyższać ludzkie możliwości w specyficznych zadaniach.

### Konwolucyjne sieci neuronowe (CNN)

Konwolucyjne sieci neuronowe (CNN) są specjalnym typem sieci neuronowych zaprojektowanych do przetwarzania danych o strukturze siatki, takich jak obrazy. CNN składają się z warstw konwolucyjnych, poolingowych i w pełni połączonych, które razem umożliwiają efektywną ekstrakcję cech i klasyfikację obrazów.

### Rekurencyjne sieci neuronowe (RNN)

Rekurencyjne sieci neuronowe (RNN) są zaprojektowane do przetwarzania sekwencji danych, takich jak tekst czy dane czasowe. RNN posiadają mechanizm pamięci, który pozwala im uwzględniać kontekst wcześniejszych elementów sekwencji przy przetwarzaniu bieżącego elementu. Jest to szczególnie użyteczne w zadaniach takich jak tłumaczenie maszynowe czy analiza sentymentu.
    `,
    code: `
## Biblioteki AI

Istnieje wiele bibliotek programistycznych, które ułatwiają tworzenie i trenowanie modeli AI. Najpopularniejsze z nich to:

- **TensorFlow**: Biblioteka open-source opracowana przez Google, która umożliwia tworzenie modeli ML i DL. Jest szeroko stosowana w przemyśle i badaniach. TensorFlow oferuje bogaty zestaw narzędzi do budowy, trenowania i wdrażania modeli AI. Wspiera zarówno modele proste, jak i bardzo złożone, co czyni go elastycznym narzędziem dla różnych zastosowań.

- **PyTorch**: Biblioteka open-source rozwijana przez Facebook AI Research, która jest znana z łatwości użycia i dynamicznego podejścia do tworzenia sieci neuronowych. PyTorch zyskuje popularność w środowisku badawczym dzięki swojej elastyczności i intuicyjności. Umożliwia łatwe debugowanie i modyfikowanie modeli, co jest istotne dla szybkiego prototypowania.

- **scikit-learn**: Biblioteka open-source do ML w języku Python, która oferuje proste i efektywne narzędzia do analizy danych i modelowania. scikit-learn jest idealnym narzędziem dla początkujących i zaawansowanych użytkowników, oferując szeroki zakres algorytmów ML, które można łatwo zastosować do różnych problemów.
    `
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
        <MathJaxContext>
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
                            <header className="article-header">
                                <p className="date">20 lipca 2024</p>
                                <h1 className="title">Podstawy Machine Learning</h1>
                            </header>
                            {content.map(section => (
                                <Element key={section.id} name={section.id} id={section.id}>
                                    <ReactMarkdown>{markdownContent[section.id]}</ReactMarkdown>
                                </Element>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer_pol />
            </main>
        </MathJaxContext>
    );
}
