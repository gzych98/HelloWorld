"use client";
import React, { useState, useEffect } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from '../../footer';
import NavBar02 from '@/components/navbar/navbar';
import Quiz from '@/components/Article/Quiz/Quiz';
import './styles_article.css';
import FloatingAlert from '@/components/Article/FloatingAlert/FloatingAlert';
import TableOfContents from '@/components/Article/TableOfContents/TableOfContents';
import ArticleHeader from '@/components/Article/ArticleHeader/ArticleHeader';
import ArticleSection from '@/components/Article/ArticleSection/ArticleSection';
import SocialShare from '@/components/Article/SocialShare/SocialShare';
import RelatedArticles from '@/components/Article/RelatedArticles/RelatedArticles';


const content = [
    { id: 'intro', title: 'Wprowadzenie' },
    { id: 'setup', title: 'Instalacja i konfiguracja' },
    { id: 'basics', title: 'Podstawy Pythona' },
    { id: 'examples', title: 'Przykłady kodu' },
    { id: 'applications', title: 'Zastosowania Pythona w inżynierii' },
    { id: 'libraries', title: 'Popularne biblioteki Pythona' },
    { id: 'resources', title: 'Dodatkowe zasoby' },
    { id: 'conclusion', title: 'Podsumowanie' }
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

const quizQuestions = [
    {
        question: "Jakie jest podstawowe rozszerzenie plików Python?",
        options: [".py", ".java", ".cpp", ".txt"],
        answer: ".py",
        explanation: "Pliki Python mają rozszerzenie .py. To jest podstawowe rozszerzenie używane dla plików zawierających kod Pythona."
    },
    {
        question: "Które z poniższych jest poprawnym operatorem arytmetycznym w Pythonie?",
        options: ["++", "**", "==", "&&"],
        answer: "**",
        explanation: "Operator ** w Pythonie jest używany do potęgowania liczb. Na przykład, 2 ** 3 daje wynik 8."
    },
    {
        question: "Jaką funkcję używa się do wyświetlania tekstu w Pythonie?",
        options: ["print()", "echo()", "console.log()", "write()"],
        answer: "print()",
        explanation: "Funkcja print() w Pythonie jest używana do wyświetlania tekstu i innych danych na standardowym wyjściu (np. konsoli)."
    }
];

const title = "Jak zacząć pracę z Pythonem?";
const date = "21 lipca 2024";
const coverImage = "/python-basic.png";

const markdownContent = {
    intro: `
## Wprowadzenie

Python jest jednym z najczęściej wybieranych języków programowania przez inżynierów na całym świecie. Dzięki swojej prostocie, wszechstronności i ogromnej społeczności, Python jest idealnym narzędziem do automatyzacji, analizy danych, tworzenia modeli symulacyjnych i wielu innych zastosowań. Ten poradnik pomoże Ci zacząć pracę z Pythonem i pokaże, jak może być przydatny w różnych dziedzinach inżynierii. Poradniki zawierają również przykładowy kod z objaśnieniami, dzięki czemu możesz łatwo zrozumieć i zastosować przedstawione rozwiązania. Każdy fragment kodu można skopiować do swojego edytora tekstu, co znacznie ułatwia naukę i wdrażanie nowych umiejętności.
    `,
    setup: `
## Instalacja i konfiguracja

### Instalacja Pythona

1. Przejdź na [oficjalną stronę Pythona](https://www.python.org/downloads/) i pobierz najnowszą wersję dla swojego systemu operacyjnego.
2. Uruchom pobrany plik instalacyjny i postępuj zgodnie z instrukcjami. Pamiętaj, aby zaznaczyć opcję "Add Python to PATH" (Dodaj Pythona do PATH).

### Instalacja edytora kodu

Dla początkujących polecamy [Visual Studio Code (VS Code)](https://code.visualstudio.com/):
1. Przejdź na [oficjalną stronę Visual Studio Code](https://code.visualstudio.com/) i pobierz edytor dla swojego systemu operacyjnego.
2. Uruchom pobrany plik instalacyjny i postępuj zgodnie z instrukcjami.

### Konfiguracja środowiska

1. Po zainstalowaniu VS Code, otwórz edytor i przejdź do sekcji rozszerzeń (ikona rozszerzeń po lewej stronie). Zainstaluj następujące rozszerzenia:
    - Python (Microsoft)
    - Pylint (Python)
2. Otwórz VS Code, wybierz "File" > "Open Folder" i utwórz nowy folder dla swojego projektu.
3. W nowo utworzonym folderze, utwórz nowy plik z rozszerzeniem \`.py\`, np. \`hello_world.py\`.

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

- **Lista** to uporządkowana kolekcja elementów, które mogą być różnego typu. Listy są definiowane za pomocą nawiasów kwadratowych.
- **Słownik** to nieuporządkowana kolekcja par klucz-wartość. Słowniki są definiowane za pomocą nawiasów klamrowych.
- **Krotka** to uporządkowana kolekcja elementów, które mogą być różnego typu. Krotki są podobne do list, ale są niemodyfikowalne (immutable). Krotki są definiowane za pomocą nawiasów okrągłych.

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

- **Pętla for** umożliwia iterację po elementach kolekcji (np. lista, krotka, słownik).
- **Instrukcja warunkowa if** umożliwia wykonanie określonego fragmentu kodu w zależności od spełnienia określonego warunku.

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

W powyższym kodzie znajduje się konstrukcja \`if __name__ == "__main__":\`, która jest typowa dla programów napisanych w Pythonie. Jej celem jest upewnienie się, że pewne fragmenty kodu będą wykonane tylko wtedy, gdy skrypt jest uruchamiany bezpośrednio, a nie importowany jako moduł do innego skryptu. 

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
    `,
    libraries: `
## Popularne biblioteki Pythona

Python oferuje wiele bibliotek, które wspomagają pracę inżynierów. Oto kilka najpopularniejszych z nich:

- **NumPy** - biblioteka do obliczeń numerycznych. Umożliwia pracę z wielowymiarowymi tablicami i matrycami oraz zawiera wiele funkcji matematycznych. [NumPy](https://numpy.org/)
- **Pandas** - narzędzie do analizy i manipulacji danymi. Umożliwia efektywne zarządzanie i analizę dużych zbiorów danych. [Pandas](https://pandas.pydata.org/)
- **Matplotlib** - biblioteka do tworzenia wykresów i wizualizacji danych. Umożliwia tworzenie wysokiej jakości wykresów w różnych formatach. [Matplotlib](https://matplotlib.org/)
- **SciPy** - zestaw narzędzi do obliczeń naukowych. Oferuje funkcje do optymalizacji, integracji, rozwiązywania równań różniczkowych i wiele innych. [SciPy](https://scipy.org/)
- **TensorFlow** - biblioteka do uczenia maszynowego. Umożliwia tworzenie i trenowanie zaawansowanych modeli machine learning i deep learning. [TensorFlow](https://www.tensorflow.org/)
- **PyTorch** - kolejna popularna biblioteka do uczenia maszynowego. Jest znana ze swojej elastyczności i łatwości użycia. [PyTorch](https://pytorch.org/)
    `,
    resources: `
## Dodatkowe zasoby

Aby pogłębić swoją wiedzę na temat Pythona i jego zastosowań w inżynierii, oto kilka dodatkowych zasobów:

- **Dokumentacja Pythona**: [https://docs.python.org/3/](https://docs.python.org/3/)
- **Kursy online**: [Coursera](https://www.coursera.org/), [edX](https://www.edx.org/), [Udemy](https://www.udemy.com/)
- **Tutoriale i artykuły**: [Real Python](https://realpython.com/), [Python.org Tutorials](https://www.python.org/about/gettingstarted/)
- **Społeczności i fora**: [Stack Overflow](https://stackoverflow.com/), [Reddit Python](https://www.reddit.com/r/Python/), [Python Discord](https://discord.com/invite/python)
    `,
    conclusion: `
## Podsumowanie

Python to potężne narzędzie, które może znacznie ułatwić pracę inżynierom w różnych dziedzinach. Jego prostota i wszechstronność sprawiają, że jest idealnym wyborem zarówno dla początkujących, jak i doświadczonych programistów. Mamy nadzieję, że ten poradnik pomógł Ci zrozumieć podstawy Pythona i jego zastosowania w inżynierii. Zachęcamy do dalszej nauki i eksperymentowania z Pythonem.

**Chcesz dowiedzieć się więcej?**  Śledź nas na mediach społecznościowych i bądź na bieżąco z najnowszymi trendami w programowaniu i inżynierii!
    `
};

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
                                <ArticleSection key={section.id} section={section} markdownContent={markdownContent} quizQuestions={quizQuestions} />
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