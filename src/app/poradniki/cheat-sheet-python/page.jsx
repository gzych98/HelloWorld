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
    { id: 'variables', title: 'Zmienne i typy danych' },
    { id: 'operators', title: 'Operatory arytmetyczne' },
    { id: 'data_structures', title: 'Struktury danych' },
    { id: 'loops_conditions', title: 'Pętle i instrukcje warunkowe' },
    { id: 'functions', title: 'Funkcje' },
    { id: 'file_operations', title: 'Praca z plikami' },
    { id: 'modules', title: 'Moduły i pakiety' },
    { id: 'list_comprehensions', title: 'List comprehensions' },
    { id: 'exceptions', title: 'Obsługa wyjątków' },
    { id: 'classes_objects', title: 'Klasy i obiekty' },
    { id: 'if_name_main', title: 'if __name__ == "__main__"' }
];

const markdownContent = {
    intro: `
## Wprowadzenie

Python jest wszechstronnym językiem programowania, który jest łatwy do nauki i używania. Ten cheat sheet pomoże Ci szybko przypomnieć sobie najważniejsze aspekty Pythona, takie jak zmienne, operatory, struktury danych, pętle, funkcje i wiele innych.
    `,
    variables: `
## Zmienne i typy danych

\`\`\`python
# Definiowanie zmiennych
a = 5       # Liczba całkowita (int)
b = 3.14    # Liczba zmiennoprzecinkowa (float)
c = "Hello" # String (str)
d = True    # Boolean (bool)
\`\`\`
    `,
    operators: `
## Operatory arytmetyczne

\`\`\`python
# Operacje arytmetyczne
suma = a + b
roznica = a - b
iloczyn = a * b
iloraz = a / b
modulo = a % b
potega = a ** b

print("Suma:", suma)          # Wynik: Suma: 8.14
print("Różnica:", roznica)    # Wynik: Różnica: 1.86
print("Iloczyn:", iloczyn)    # Wynik: Iloczyn: 15.7
print("Iloraz:", iloraz)      # Wynik: Iloraz: 1.59
print("Modulo:", modulo)      # Wynik: Modulo: 2
print("Potega:", potega)      # Wynik: Potega: 125
\`\`\`
    `,
    data_structures: `
## Struktury danych

\`\`\`python
# Lista
lista = [1, 2, 3, 4, 5]
print(lista[0])   # Wynik: 1

# Słownik
slownik = {"klucz1": "wartość1", "klucz2": "wartość2"}
print(slownik["klucz1"])  # Wynik: wartość1

# Krotka
krotka = (1, 2, 3)
print(krotka[0])  # Wynik: 1

# Zbiór
zbior = {1, 2, 3, 4, 5}
print(1 in zbior)  # Wynik: True
\`\`\`
    `,
    loops_conditions: `
## Pętle i instrukcje warunkowe

\`\`\`python
# Pętla for
for i in lista:
    print(i)

# Instrukcja warunkowa
if a > b:
    print("a jest większe od b")
else:
    print("a nie jest większe od b")

# Pętla while
i = 0
while i < 5:
    print(i)
    i += 1
\`\`\`
    `,
    functions: `
## Funkcje

\`\`\`python
# Definiowanie funkcji
def dodaj(x, y):
    return x + y

# Wywołanie funkcji
wynik = dodaj(5, 3)
print("Wynik:", wynik)  # Wynik: 8
\`\`\`
    `,
    file_operations: `
## Praca z plikami

\`\`\`python
# Otwieranie pliku
with open('plik.txt', 'r') as plik:
    zawartosc = plik.read()

print(zawartosc)

# Zapisywanie do pliku
with open('plik.txt', 'w') as plik:
    plik.write("To jest nowa zawartość pliku.")
\`\`\`
    `,
    modules: `
## Moduły i pakiety

\`\`\`python
# Importowanie modułu
import math

# Używanie funkcji z modułu
print(math.sqrt(16))  # Wynik: 4.0

# Importowanie konkretnej funkcji z modułu
from math import sqrt

print(sqrt(25))  # Wynik: 5.0
\`\`\`
    `,
    list_comprehensions: `
## List comprehensions

\`\`\`python
# Tworzenie listy za pomocą list comprehension
kwadraty = [x ** 2 for x in range(10)]
print(kwadraty)  # Wynik: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`
    `,
    exceptions: `
## Obsługa wyjątków

\`\`\`python
# Blok try-except
try:
    wynik = 10 / 0
except ZeroDivisionError:
    print("Nie można dzielić przez zero.")
\`\`\`
    `,
    classes_objects: `
## Klasy i obiekty

\`\`\`python
# Definiowanie klasy
class Samochod:
    def __init__(self, marka, model):
        self.marka = marka
        self.model = model

    def info(self):
        return f"{self.marka} {self.model}"

# Tworzenie obiektu klasy
moj_samochod = Samochod("Toyota", "Corolla")
print(moj_samochod.info())  # Wynik: Toyota Corolla
\`\`\`
    `,
    if_name_main: `
## if __name__ == "__main__"

\`\`\`python
def main():
    print("To jest główna funkcja.")

if __name__ == "__main__":
    main()
\`\`\`

- **\`__name__\`**: To specjalna zmienna w Pythonie, która przyjmuje wartość \`"__main__"\` wtedy, gdy skrypt jest uruchamiany bezpośrednio. Jeśli skrypt jest importowany jako moduł do innego skryptu, \`__name__\` przyjmuje wartość odpowiadającą nazwie pliku modułu.
- **\`if __name__ == "__main__":\`**: Ta konstrukcja sprawdza, czy skrypt jest uruchamiany bezpośrednio. Jeśli tak, to wykonuje kod wewnątrz bloku \`if\`. Jeśli skrypt jest importowany jako moduł, kod wewnątrz tego bloku nie zostanie wykonany.
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
                                <img src="/cheat-sheet.python.png" alt="Article Cover" className="article-cover" />
                                <div className="cover-text">wygenerowano przy pomocy sztucznej inteligencji</div>
                            </div>
                            <header className="article-header">
                                <p className="date">21 lipca 2024</p>
                                <h1 className="title">Lista podstawowych funkcjonalności Python?</h1>
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
