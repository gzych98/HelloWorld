"use client";
import React from 'react';
import Footer_pol from '../footer';
import NavBar_pol from '../navbar';
import './styles-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar02 from '@/components/navbar/navbar';

const articles = [
    // {
    //     id: 4,
    //     title: 'Python: Sphinx do tworzenia dokumentacji projektu',
    //     date: '22 lipca 2024',
    //     excerpt: 'Sphinx to potężne narzędzie do generowania dokumentacji dla projektów Python. Dowiedz się, jak zainstalować, skonfigurować i używać Sphinx do tworzenia przejrzystej i profesjonalnej dokumentacji.',
    //     link: 'poradniki/python-sphinx-documentation',
    //     image: 'sphinx-docs.png'
    // },
    {
        id: 3,
        title: 'Python: Cheat Sheet',
        date: '24 lipca 2024',
        excerpt: 'Cheat Sheet zawierający najważniejsze informacje potrzebne do tworzenia prostych skryptów w Pythonie. Szybki przewodnik po zmiennych, operatorach, strukturach danych i innych podstawowych elementach języka.',
        link: 'poradniki/cheat-sheet-python',
        image: 'cheat-sheet.python.png'
    },
    {
        id: 2,
        title: 'Python: Cheat Sheet',
        date: '24 lipca 2024',
        excerpt: 'Cheat Sheet zawierający najważniejsze informacje potrzebne do tworzenia prostych skryptów w Pythonie. Szybki przewodnik po zmiennych, operatorach, strukturach danych i innych podstawowych elementach języka.',
        link: 'poradniki/cheat-sheet-python',
        image: 'cheat-sheet.python.png'
    },
    // {
    //     id: 2,
    //     title: 'Wprowadzenie do ML',
    //     date: '20 lipca 2024',
    //     excerpt: 'Podstawy Machine Learning (ML) i jak zacząć przygodę z tą fascynującą dziedziną. Przegląd najważniejszych pojęć, narzędzi i technik używanych w ML.',
    //     link: 'poradniki/ml-introduction',
    //     image: 'article_ml_intro.png'
    // },
    {
        id: 1,
        title: 'Python dla inżyniera',
        date: '21 lipca 2024',
        excerpt: 'Podstawy programowania w Pythonie skierowane do inżynierów. Zawiera przykłady i zastosowania, które pomogą inżynierom efektywnie korzystać z Pythona w codziennej pracy.',
        link: 'poradniki/podstawy-python',
        image: 'python-basic.png'
    },
    // {
    //     id: 5,
    //     title: 'Wprowadzenie do Digital Signal Processing (DSP)',
    //     date: '30 lipca 2024',
    //     excerpt: 'Poznaj podstawy Digital Signal Processing (DSP), techniki przetwarzania sygnałów cyfrowych używanej w telekomunikacji, audio, obrazowaniu medycznym i innych dziedzinach. Ten artykuł wprowadza do kluczowych koncepcji DSP, takich jak próbkowanie, filtrowanie, transformacje sygnałów oraz narzędzia i biblioteki pomocne w pracy z DSP.',
    //     link: 'poradniki/dsp-podstawy',
    //     image: 'dsp-podstawy.png'
    // },    
    // Można dodać więcej artykułów w podobnym formacie
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sortowanie artykułów od najnowszego do najstarszego


export default function ArticleListPage() {
    return (
        <main>
            <NavBar02 />
            <div className="page article-list-page">
                <div className="content-container">
                    <h1>Lista Artykułów</h1>
                    <h2>Odkryj, jak programowanie rewolucjonizuje świat inżynierii</h2>
                    <p>Nasze poradniki zawierają również przykładowy kod z objaśnieniami, dzięki czemu możesz łatwo zrozumieć i zastosować przedstawione rozwiązania. Każdy fragment kodu można skopiować do swojego edytora tekstu, co znacznie ułatwia naukę i wdrażanie nowych umiejętności.</p>
                    <p><strong>Warto rozwijać swoje kompetencje, a dzięki naszym poradnikom z łatwością wejdziesz do świata automatyzacji i programowania w inżynierii. Nie czekaj, zacznij już dziś!</strong></p>
                    <ul className="article-list">
                        {articles.map(article => (
                            <li key={article.id} className="article-item">
                                <a href={article.link}>
                                    <img src={article.image} alt={article.title} className="article-image" />
                                    <div className="article-content">
                                        <h2>{article.title}</h2>
                                        <p className="article-date">{article.date}</p>
                                        <p>{article.excerpt}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer_pol />
        </main>
    );
}
