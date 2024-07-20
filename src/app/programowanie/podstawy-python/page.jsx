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
    { id: 'setup', title: 'Instalacja i konfiguracja' },
    { id: 'basics', title: 'Podstawy Pythona' },
    { id: 'examples', title: 'Przykłady kodu' },
    { id: 'applications', title: 'Zastosowania Pythona w inżynierii' },
    { id: 'libraries', title: 'Popularne biblioteki Pythona' }
];

const markdownContent = {
    intro: `
## Wprowadzenie

Python jest jednym z najczęściej wybieranych języków programowania przez inżynierów na całym świecie. Dzięki swojej prostocie, wszechstronności i ogromnej społeczności, Python jest idealnym narzędziem do automatyzacji, analizy danych, tworzenia modeli symulacyjnych i wielu innych zastosowań. Ten poradnik pomoże Ci zacząć pracę z Pythonem i pokaże, jak może być przydatny w różnych dziedzinach inżynierii.
    `,
    setup: `
## Instalacja i konfiguracja

### Instalacja Pythona

1. **Pobierz Pythona**: Przejdź na [oficjalną stronę Pythona](https://www.python.org/downloads/) i pobierz najnowszą wersję dla swojego systemu operacyjnego.
2. **Zainstaluj Pythona**: Uruchom pobrany plik instalacyjny i postępuj zgodnie z instrukcjami. Pamiętaj, aby zaznaczyć opcję "Add Python to PATH" (Dodaj Pythona do PATH).

### Instalacja edytora kodu

Dla początkujących polecamy [Visual Studio Code (VS Code)](https://code.visualstudio.com/):
1. **Pobierz VS Code**: Przejdź na [oficjalną stronę Visual Studio Code](https://code.visualstudio.com/) i pobierz edytor dla swojego systemu operacyjnego.
2. **Zainstaluj VS Code**: Uruchom pobrany plik instalacyjny i postępuj zgodnie z instrukcjami.

### Konfiguracja środowiska

1. **Instalacja rozszerzeń**: Po zainstalowaniu VS Code, otwórz edytor i przejdź do sekcji rozszerzeń (ikona rozszerzeń po lewej stronie). Zainstaluj następujące rozszerzenia:
    - Python (Microsoft)
    - Pylint (Python)
2. **Utwórz nowy projekt**: Otwórz VS Code, wybierz "File" > "Open Folder" i utwórz nowy folder dla swojego projektu.
3. **Utwórz plik Python**: W nowo utworzonym folderze, utwórz nowy plik z rozszerzeniem \`.py\`, np. \`hello_world.py\`.
    `,
    basics: `
## Podstawy Pythona

Python charakteryzuje się prostą składnią i łatwością użycia. Poniżej znajdują się podstawowe elementy składni Pythona, które pozwolą Ci szybko zacząć programowanie.

### Zmienne i typy danych

W Pythonie nie trzeba deklarować typu zmiennej. Python automatycznie rozpoznaje typ zmiennej na podstawie wartości, którą jej przypisujemy.

\`\`\`python
# Definiowanie zmiennych
a = 5       # Liczba całkowita
b = 3.14    # Liczba zmiennoprzecinkowa
c = "Hello" # String
d = True    # Boolean
\`\`\`

### Operatory arytmetyczne

Python obsługuje wszystkie podstawowe operatory arytmetyczne.

\`\`\`python
# Operacje arytmetyczne
suma = a + b
roznica = a - b
iloczyn = a * b
iloraz = a / b

print("Suma:", suma)      # Wynik: Suma: 8.14
print("Różnica:", roznica) # Wynik: Różnica: 1.86
print("Iloczyn:", iloczyn)  # Wynik: Iloczyn: 15.7
print("Iloraz:", iloraz)    # Wynik: Iloraz: 1.59
\`\`\`

### Struktury danych

Python oferuje różne struktury danych, takie jak listy, słowniki i krotki.

- **Lista**: Lista to uporządkowana kolekcja elementów, które mogą być różnego typu. Listy są definiowane za pomocą nawiasów kwadratowych.
- **Słownik**: Słownik to nieuporządkowana kolekcja par klucz-wartość. Słowniki są definiowane za pomocą nawiasów klamrowych.
- **Krotka**: Krotka to uporządkowana kolekcja elementów, które mogą być różnego typu. Krotki są podobne do list, ale są niemodyfikowalne (immutable). Krotki są definiowane za pomocą nawiasów okrągłych.

\`\`\`python
# Lista
lista = [1, 2, 3, 4, 5]

# Słownik
slownik = {"klucz1": "wartość1", "klucz2": "wartość2"}

# Krotka
krotka = (1, 2, 3)
\`\`\`

### Pętle i instrukcje warunkowe

Pętle i instrukcje warunkowe umożliwiają wykonywanie kodu w zależności od warunków.

- **Pętla for**: Umożliwia iterację po elementach kolekcji (np. lista, krotka, słownik).
- **Instrukcja warunkowa if**: Umożliwia wykonanie określonego fragmentu kodu w zależności od spełnienia określonego warunku.

\`\`\`python
# Pętla for
for i in lista:
    print(i)

# Instrukcja warunkowa
if a > b:
    print("a jest większe od b")
else:
    print("a nie jest większe od b")
\`\`\`

### Funkcje

Funkcje pozwalają na grupowanie kodu w celu ponownego użycia. Funkcje są definiowane za pomocą słowa kluczowego \`def\`.

\`\`\`python
# Definiowanie funkcji
def dodaj(x, y):
    return x + y

# Wywołanie funkcji
wynik = dodaj(5, 3)
print("Wynik:", wynik)  # Wynik: 8
\`\`\`
    `,
    examples: `
## Przykłady kodu

Aby lepiej zrozumieć, jak działa Python, oto kilka prostych przykładów kodu.

### Przykład pliku "Hello World"

\`\`\`python
# hello_world.py
def hello_world():
    print("Hello, World!")

if __name__ == "__main__":
    hello_world()
\`\`\`

### Operacje matematyczne

#### Dodawanie i odejmowanie

\`\`\`python
a = 5
b = 3

suma = a + b
roznica = a - b

print("Suma:", suma)      # Wynik: Suma: 8
print("Różnica:", roznica) # Wynik: Różnica: 2
\`\`\`

#### Mnożenie i dzielenie

\`\`\`python
a = 5
b = 3

iloczyn = a * b
iloraz = a / b

print("Iloczyn:", iloczyn)  # Wynik: Iloczyn: 15
print("Iloraz:", iloraz)    # Wynik: Iloraz: 1.666...
\`\`\`

#### Potęgowanie i pierwiastkowanie

\`\`\`python
a = 5
b = 3

potega = a ** b
pierwiastek = a ** (1/b)

print("Potęga:", potega)        # Wynik: Potęga: 125
print("Pierwiastek:", pierwiastek) # Wynik: Pierwiastek: 1.7099759466766968
\`\`\`
    `,
    applications: `
## Zastosowania Pythona w inżynierii

Python znajduje szerokie zastosowanie w różnych dziedzinach inżynierii:

### Analiza danych

Python umożliwia przetwarzanie i analizę dużych zbiorów danych, co jest kluczowe w inżynierii. Można go używać do analizy wyników eksperymentów, monitorowania procesów produkcyjnych i wiele więcej.

### Modelowanie i symulacje

Python pozwala na tworzenie modeli matematycznych i ich symulacje. Umożliwia to inżynierom przewidywanie zachowania systemów i optymalizację procesów.

### Automatyzacja

Python umożliwia automatyzację powtarzalnych zadań i procesów, co znacznie zwiększa efektywność pracy. Może to obejmować automatyzację analiz, raportowania, testowania i wielu innych zadań.

### Sterowanie urządzeniami

Python jest używany do programowania mikrokontrolerów i sterowników PLC, co jest istotne w inżynierii elektrycznej i automatyce. Pozwala na tworzenie zaawansowanych systemów sterowania i monitoringu.

### Machine learning i AI

Python jest szeroko stosowany w implementacji algorytmów [uczenia maszynowego](/programowanie/ml-introduction) i sztucznej inteligencji. Jest wykorzystywany do tworzenia modeli predykcyjnych, analizy obrazów, przetwarzania języka naturalnego i wielu innych zaawansowanych zastosowań.

### Popularne biblioteki Pythona

Python oferuje wiele bibliotek, które wspomagają pracę inżynierów. Oto kilka najpopularniejszych z nich:

- **NumPy**: Biblioteka do obliczeń numerycznych. Umożliwia pracę z wielowymiarowymi tablicami i matrycami oraz zawiera wiele funkcji matematycznych. [NumPy](https://numpy.org/)
- **Pandas**: Narzędzie do analizy i manipulacji danymi. Umożliwia efektywne zarządzanie i analizę dużych zbiorów danych. [Pandas](https://pandas.pydata.org/)
- **Matplotlib**: Biblioteka do tworzenia wykresów i wizualizacji danych. Umożliwia tworzenie wysokiej jakości wykresów w różnych formatach. [Matplotlib](https://matplotlib.org/)
- **SciPy**: Zestaw narzędzi do obliczeń naukowych. Oferuje funkcje do optymalizacji, integracji, rozwiązywania równań różniczkowych i wiele innych. [SciPy](https://scipy.org/)
- **TensorFlow**: Biblioteka do uczenia maszynowego. Umożliwia tworzenie i trenowanie zaawansowanych modeli machine learning i deep learning. [TensorFlow](https://www.tensorflow.org/)
- **PyTorch**: Kolejna popularna biblioteka do uczenia maszynowego. Jest znana ze swojej elastyczności i łatwości użycia. [PyTorch](https://pytorch.org/)
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
                            <div className="article-cover-container">
                                <img src="/python-basic.png" alt="Article Cover" className="article-cover" />
                                <div className="cover-text">wygenerowano przy pomocy sztucznej inteligencji</div>
                            </div>
                            <header className="article-header">
                                <p className="date">Data publikacji: 20 lipca 2024</p>
                                <h1 className="title">Poradnik: Jak zacząć pracę z Pythonem w inżynierii</h1>
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
        </MathJaxContext>
    );
}