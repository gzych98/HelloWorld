import React from 'react';
import '../admin.css';

const ContentManagement = ({ handleImageClick }) => (
  <>
    <h3>Tworzenie i edytowanie stron</h3>
    <p>1. Lista wszytkich stron jest widoczna w zakładce Strony/Wszystkie strony,</p>
    <p>2. Dodałem do Wordpress wtyczkę umożliwiającą powielenie wybranej strony.</p>
    <p>3. Pole szybkiej edycji pozwala zmodyfikować podstawowe parametry strony.</p>
    <img src="wordpress5.png" alt="Tworzenie nowej strony" onClick={() => handleImageClick('wordpress5.png')} />
    <figcaption>Rysunek 7: Tworzenie nowej strony w WordPress</figcaption>
    
    <h3>Szybka edycja strony</h3>
    <p>1. Tytuł jest wyświetlany m.in. w zakładkach przeglądarki.</p>
    <p>2. Nazwa uproszczona jest odnośnikiem do strony, twojadomena.pl/adres-strony (taka konfiguracja wymaga ustawienia odpowiednich permalinków) </p>
    <p>3. Ustawienie odpowieniego statusu strony</p>
    <p>3.1 Opublikowano - strona widoczna dla każdego</p>
    <p>3.2 Oczekuje na przegląd/Szkic - niewidoczne dla użytkowników</p>
    <p>4. Element nadrzędny - pomaga w organizacji domeny</p>
    <p>5. Hasło jeżeli chcemy ograniczyć dostęp</p>
    <img src="wordpress6.png" alt="Tworzenie nowego wpisu" onClick={() => handleImageClick('wordpress6.png')} />
    <figcaption>Rysunek 8: Tworzenie nowego wpisu w WordPress</figcaption>

    <h3>Formularz zgłoszeniowy</h3>
    <p>Otwieramy panel ustawień WPForms i przechodzimy do edycji formularza kontaktowego</p>    
    <img src="forms1.png" alt="Ustawienia WPForms" onClick={() => handleImageClick('forms1.png')} />
    <p>1. Przechodzimy do Powiadomień</p>    
    <p>2. Uzupełniamy dane</p>    
    <p>3. Zapisujemy</p>    
    <img src="forms2.png" alt="Ustawienia WPForms" onClick={() => handleImageClick('forms2.png')} />
    <p>Wtyczka, którą dodałem do strony, w wersji darmowej nie obsługuje przeglądania wpisów w panelu administratora Wordpress. Powiadomienia przychodzą jedynie na maila wskazanego w ustawieniach formularza.</p>
   
  </>
);

export default ContentManagement;
