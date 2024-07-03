"use client"
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../footer';
import NavBar_pol from '../navbar';
import './article.css';

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'mechanics', title: 'Podstawy mechaniki' },
    { id: 'programming', title: 'Podstawy programowania' },
    { id: 'math', title: 'Równania matematyczne' },
    { id: 'code', title: 'Przykładowy kod Python' }
];

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
                <NavBar_pol />
                <div className="page">
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
                            <Element name="intro" id="intro">
                                <h2>Wprowadzenie</h2>
                                <p>W tym artykule omówimy podstawy mechaniki i programowania...</p>
                            </Element>
                            <Element name="mechanics" id="mechanics">
                                <h2>Podstawy mechaniki</h2>
                                <p>Mechanika to dziedzina fizyki zajmująca się ruchem i siłami...</p>
                            </Element>
                            <Element name="programming" id="programming">
                                <h2>Podstawy programowania</h2>
                                <p>Programowanie to proces tworzenia oprogramowania...</p>
                            </Element>
                            <Element name="math" id="math">
                                <h2>Równania matematyczne</h2>
                                <MathJax>
                                    {`E = mc^2`}
                                </MathJax>
                                <MathJax>
                                    {`a^2 + b^2 = c^2`}
                                </MathJax>
                            </Element>
                            <Element name="code" id="code">
                                <h2>Przykładowy kod Python</h2>
                                <pre>
                                    <code>
                                        {`def hello_world():
    print("Hello, World!")

hello_world()`}
                                    </code>
                                </pre>
                            </Element>
                        </div>
                    </div>
                </div>
                <Footer_pol />
            </main>
        </MathJaxContext>
    );
}
