"use client";
import React from 'react';
import Footer_pol from '../footer';
import NavBar_pol from '../navbar';
import './styles-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar02 from '@/components/navbar/navbar';

const articles = [
    {
        id: 1,
        title: 'Python dla inżyniera',
        date: '15 lipca 2024',
        excerpt: 'Podstawy programowania w Pythonie dla inżynierów.',
        link: 'poradniki/podstawy-python',
        image: 'python-basic.png'
    },
    {
        id: 2,
        title: 'Wprowadzenie do ML',
        date: '20 lipca 2024',
        excerpt: 'Podstawy Machine Learning i jak zacząć.',
        link: 'poradniki/ml-introduction',
        image: 'article_ml_intro.png'
    },
    {
        id: 3,
        title: 'Python Cheat Sheet',
        date: '21 lipca 2024',
        excerpt: 'Wszystko czego potrzebujesz do tworzenia prostych skryptów Python.',
        link: 'poradniki/cheat-sheet-python',
        image: 'cheat-sheet.python.png'
    },
    // Można dodać więcej artykułów w podobnym formacie
];

export default function ArticleListPage() {
    return (
        <main>
            <NavBar02 />
            <div className="page article-list-page">
                <div className="content-container">
                    <h1>Lista Artykułów</h1>
                    <h2>Odkryj, jak programowanie rewolucjonizuje świat inżynierii</h2>
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
