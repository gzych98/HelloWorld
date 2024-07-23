"use client";
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import './styles_article.css';

const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'setup', title: 'Instalacja i konfiguracja' },
    { id: 'config', title: 'Konfiguracja projektu Sphinx' },
    { id: 'docstrings', title: 'Docstringi i automatyczna dokumentacja' },
    { id: 'building', title: 'Generowanie dokumentacji' },
    { id: 'automation', title: 'Automatyzacja tworzenia plików .rst' },
    { id: 'summary', title: 'Podsumowanie' }
];

const markdownContent = {
    intro: `
## Wprowadzenie

Sphinx to potężne narzędzie do tworzenia dokumentacji kodu Python. Umożliwia generowanie dokumentacji w różnych formatach, takich jak HTML, PDF, i wiele innych. W tym poradniku pokażemy, jak zainstalować i skonfigurować Sphinx, jak pisać docstringi, które będą automatycznie przetwarzane, oraz jak generować i aktualizować dokumentację projektu.

    `,
    setup: `
## Instalacja i konfiguracja

Aby rozpocząć korzystanie z Sphinx, najpierw musisz go zainstalować. Możesz to zrobić za pomocą pip:

\`\`\`bash
pip install sphinx
\`\`\`

Następnie, zainicjuj strukturę projektu Sphinx w katalogu, w którym chcesz przechowywać dokumentację:

\`\`\`bash
sphinx-quickstart
\`\`\`

Podczas inicjalizacji Sphinx zada kilka pytań dotyczących konfiguracji projektu, takich jak nazwa projektu, autor, wersja itp. Odpowiedz na nie zgodnie z potrzebami.
    `,
    config: `
## Konfiguracja projektu Sphinx

Po zainicjowaniu projektu, głównym plikiem konfiguracyjnym jest \`conf.py\`, który znajduje się w katalogu \`source\`. Musisz dodać ścieżkę do katalogu z kodem źródłowym oraz niezbędne rozszerzenia:

\`\`\`python
import os
import sys
sys.path.insert(0, os.path.abspath('../my_project/code'))

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode'
]

templates_path = ['_templates']
exclude_patterns = []
html_theme = 'alabaster'
html_static_path = ['_static']
\`\`\`
    `,
    docstrings: `
## Docstringi i automatyczna dokumentacja

Aby Sphinx mógł automatycznie generować dokumentację z Twojego kodu, musisz pisać docstringi w odpowiednim formacie. Oto przykład funkcji z docstringiem w stylu Google:

\`\`\`python
def example_function(param1, param2):
    """
    This is an example function.

    Args:
        param1 (int): The first parameter.
        param2 (str): The second parameter.

    Returns:
        bool: The return value. True for success, False otherwise.
    """
    return True
\`\`\`

Następnie, w katalogu \`source\`, utwórz plik \`index.rst\` i dodaj odnośniki do modułów:

\`\`\`rst
.. toctree::
   :maxdepth: 2
   :caption: Contents:

   modules
\`\`\`

Utwórz również plik \`modules.rst\` z zawartością:

\`\`\`rst
Modules
=======

.. automodule:: your_module_name
    :members:
    :undoc-members:
    :show-inheritance:
\`\`\`
    `,
    building: `
## Generowanie dokumentacji

Aby wygenerować dokumentację, przejdź do katalogu głównego projektu i uruchom:

\`\`\`bash
make html
\`\`\`

Na systemie Windows użyj skryptu \`make.bat\`:

\`\`\`batch
@echo off

set SPHINXBUILD=sphinx-build
set SOURCEDIR=source
set BUILDDIR=build

if "%1" == "" (
    %SPHINXBUILD% -M help %SOURCEDIR% %BUILDDIR%
) else (
    %SPHINXBUILD% -M %1 %SOURCEDIR% %BUILDDIR%
)
\`\`\`

Następnie uruchom skrypt \`make.bat\`:

\`\`\`bash
.\make.bat html
\`\`\`
    `,
    automation: `
## Automatyzacja tworzenia plików .rst

Jeśli masz wiele modułów, możesz użyć skryptu Python do automatyzacji tworzenia plików \`.rst\`:

\`\`\`python
import os

project_root = '/path/to/your/project/code'
rst_dir = '/path/to/your/project/source'

def generate_rst_files(project_root, rst_dir):
    for root, dirs, files in os.walk(project_root):
        for file in files:
            if file.endswith('.py'):
                module_path = os.path.relpath(os.path.join(root, file), project_root).replace(os.sep, '.')
                module_name = os.path.splitext(module_path)[0]
                rst_path = os.path.join(rst_dir, f"{module_name}.rst")
                
                # Utwórz brakujące katalogi
                os.makedirs(os.path.dirname(rst_path), exist_ok=True)

                with open(rst_path, 'w') as rst_file:
                    rst_file.write(f"{module_name}\n")
                    rst_file.write("=" * len(module_name) + "\n\n")
                    rst_file.write(f".. automodule:: {module_name}\n")
                    rst_file.write("    :members:\n")
                    rst_file.write("    :undoc-members:\n")
                    rst_file.write("    :show-inheritance:\n")

generate_rst_files(project_root, rst_dir)
\`\`\`

Uruchom skrypt:

\`\`\`bash
python /path/to/your/project/source/automate-rst.py
\`\`\`
    `,
    summary: `
## Podsumowanie

Sphinx to potężne narzędzie, które może znacznie ułatwić tworzenie i utrzymywanie dokumentacji projektów Python. Dzięki automatycznemu generowaniu dokumentacji na podstawie docstringów oraz możliwości rozbudowy za pomocą rozszerzeń, Sphinx jest idealnym wyborem dla wielu projektów. Mamy nadzieję, że ten poradnik pomógł Ci w konfiguracji i rozpoczęciu pracy z Sphinx.
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
        <div className="code-block" onClick={() => copyToClipboard(code, setCopied)}>
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
                            <img src="/sphinx-docs.png" alt="Article Cover" className="article-cover" />
                            <div className="cover-text">wygenerowano przy pomocy sztucznej inteligencji</div>
                        </div>
                        <header className="article-header">
                            <p className="date">21 lipca 2024</p>
                            <h1 className="title">Python: Sphinx do tworzenia dokumentacji projektu</h1>
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
