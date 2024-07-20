"use client";
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../footer';
import NavBar02 from '@/components/navbar/navbar';
import './mechanics1.css';

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'mechanics', title: 'Podstawy mechaniki' },
    { id: 'programming', title: 'Podstawy programowania' },
    { id: 'math', title: 'Równania matematyczne' },
    { id: 'code', title: 'Przykładowy kod Python' }
];

const markdownContent = {
    intro: `
## Wprowadzenie

W tym artykule omówimy podstawy mechaniki i programowania...
    `,
    mechanics: `
## Podstawy mechaniki

Mechanika to dziedzina fizyki zajmująca się ruchem i siłami...
    `,
    programming: `
## Podstawy programowania

Programowanie to proces tworzenia oprogramowania...
    `,
    math: `
## Równania matematycznes

\`\`\`math
E = mc^2
\`\`\`

\`\`\`math
a^2 + b^2 = c^2
\`\`\`
    `,
    code: `
## Przykładowy kod Python

\`\`\`python
def hello_world():
    print("Hello, World!")

hello_world()
\`\`\`
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
                            <header className="article-header">
                                <h1 className="title">Nazwa artykułu</h1>
                                <p className="date">Data publikacji: 5 lipca 2024</p>
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
