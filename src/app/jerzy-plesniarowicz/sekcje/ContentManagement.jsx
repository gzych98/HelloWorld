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

    {/* <h3>Zarządzanie mediami</h3>
    <p>Aby zarządzać mediami, przejdź do sekcji "Media". Możesz dodawać, edytować i usuwać obrazy, filmy i pliki.</p>
   

    <h3>Zarządzanie komentarzami</h3>
    <p>Aby zarządzać komentarzami, przejdź do sekcji "Komentarze". Możesz zatwierdzać, edytować i usuwać komentarze.</p> */}
   
  </>
);

export default ContentManagement;
