"use client";
import React, { useEffect, useState } from 'react';
import Footer_pol from '../footer';
import NavBar_pol from '../navbar';
import './styles-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar02 from '@/components/navbar/navbar';

const articles = [
    {
        id: 3,
        title: 'Interactive Plot Point Picker',
        date: '24 lipca 2024',
        category: 'Data Science',
        excerpt: 'Aplikacja umożliwia łatwe odczytywanie danych z wykresów: wczytujesz obraz, zaznaczasz punkty, przeliczasz je na rzeczywiste wartości i eksportujesz wyniki do pliku CSV.',
        link: 'poradniki/image-to-chart',
        image: 'image-to-chart.png'
    },
    {
        id: 2,
        title: 'Cheat Sheet',
        date: '24 lipca 2024',
        category: 'Python',
        excerpt: 'Cheat Sheet zawierający najważniejsze informacje potrzebne do tworzenia prostych skryptów w Pythonie. Szybki przewodnik po zmiennych, operatorach, strukturach danych i innych podstawowych elementach języka.',
        link: 'poradniki/cheat-sheet-python',
        image: 'cheat-sheet.python.png'
    },
    {
        id: 1,
        title: 'Python dla inżyniera',
        date: '21 lipca 2024',
        category: 'Inżynieria',
        excerpt: 'Podstawy programowania w Pythonie skierowane do inżynierów. Zawiera przykłady i zastosowania, które pomogą inżynierom efektywnie korzystać z Pythona w codziennej pracy.',
        link: 'poradniki/podstawy-python',
        image: 'python-basic.png'
    },
].sort((a, b) => new Date(b.date) - new Date(a.date));

const categories = ['Wszystkie', 'Data Science', 'Python', 'Inżynieria'];

export default function ArticleListPage() {
    const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

    const filteredArticles = selectedCategory === 'Wszystkie' ? articles : articles.filter(article => article.category === selectedCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(el => observer.observe(el));

        return () => {
            hiddenElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <main className="article-list-page">
            <NavBar02 />
            <div className="content-container">
                <h1 className="hidden">Lista Artykułów</h1>
                <h2 className="hidden">Odkryj, jak programowanie rewolucjonizuje świat inżynierii</h2>
                <p className="intro-text hidden">Nasze poradniki zawierają również przykładowy kod z objaśnieniami, dzięki czemu możesz łatwo zrozumieć i zastosować przedstawione rozwiązania. Każdy fragment kodu można skopiować do swojego edytora tekstu, co znacznie ułatwia naukę i wdrażanie nowych umiejętności.</p>
                <p className="intro-text hidden"><strong>Warto rozwijać swoje kompetencje, a dzięki naszym poradnikom z łatwością wejdziesz do świata automatyzacji i programowania w inżynierii. Nie czekaj, zacznij już dziś!</strong></p>
                
                <div className="category-filter">
                    {categories.map(category => (
                        <button 
                            key={category} 
                            className={`category-button ${category === selectedCategory ? 'active' : ''}`} 
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <ul className="article-list">
                    {filteredArticles.map(article => (
                        <li key={article.id} className="article-item hidden show">
                            <a href={article.link}>
                                <img src={article.image} alt={article.title} className="article-image" />
                                <div className="article-content">
                                    <span className={`article-category ${article.category.toLowerCase().replace(/\s+/g, '-')}`}>{article.category}</span>
                                    <h2>{article.title}</h2>
                                    <p className="article-date">{article.date}</p>
                                    <p>{article.excerpt}</p>
                                    <div className="read-more">Czytaj więcej</div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer_pol />
        </main>
    );
}
