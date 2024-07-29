import React, { useState, useEffect } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import './styles_article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FloatingAlert from '@/components/Article/FloatingAlert/FloatingAlert';
import TableOfContents from '@/components/Article/TableOfContents/TableOfContents';
import ArticleHeader from '@/components/Article/Article/ArticleHeader/ArticleHeader';
import ArticleSection from '@/components/Article/ArticleSection/ArticleSection';
import Quiz from '@/components/Article/Quiz/Quiz';

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'setup', title: 'Instalacja i konfiguracja' },
    { id: 'basics', title: 'Podstawy Pythona' },
    { id: 'examples', title: 'Przykłady kodu' },
    { id: 'applications', title: 'Zastosowania Pythona w inżynierii' },
    { id: 'libraries', title: 'Popularne biblioteki Pythona' },
    { id: 'resources', title: 'Dodatkowe zasoby' },
    { id: 'conclusion', title: 'Podsumowanie' },
];

const relatedArticles = [
    {
        id: 1,
        title: 'Interactive Plot Point Picker',
        link: 'poradniki/image-to-chart',
    },
    {
        id: 2,
        title: 'Python: Cheat Sheet',
        link: 'poradniki/cheat-sheet-python',
    },
    {
        id: 3,
        title: 'Python dla inżyniera',
        link: 'poradniki/podstawy-python',
    },
];

const title = 'Jak zacząć pracę z Pythonem?';
const date = '21 lipca 2024';
const coverImage = '/python-basic.png';

// Zdefiniowane markdownContent zostało pominięte dla skrócenia kodu

const ArticlePage = () => {
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
                <FloatingAlert message="Na końcu artykułu znajduje się krótki quiz sprawdzający Twoją wiedzę!" duration={5000} />
                <div className="page" id="how-it-works">
                    <div className="content-container">
                        <TableOfContents content={content} activeSection={activeSection} />
                        <div className="article">
                            <ArticleHeader date={date} title={title} coverImage={coverImage} />
                            {content.map(section => (
                                <ArticleSection key={section.id} section={section} markdownContent={markdownContent} />
                            ))}
                            <SocialShare />
                            <RelatedArticles articles={relatedArticles} />
                        </div>
                    </div>
                </div>
                <Footer_pol />
            </main>
        </MathJaxContext>
    );
};

export default ArticlePage;
