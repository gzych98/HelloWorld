import React from 'react';
import '../admin.css';

const Basics = ({ handleImageClick }) => (
  <>
    <p>Aby zalogować się do panelu administracyjnego WordPress, przejdź do <a href='https://jerzyplesniarowicz.pl/wp-admin' target="_blank" rel="noopener noreferrer">strony logowania</a> i wprowadź swoje dane logowania.</p>
    <p>login: 7vvgoz</p>
    <p>hasło: wysłałem na FB</p>
    <img src="wordpress2.png" alt="Logowanie do WordPressa" onClick={() => handleImageClick('wordpress2.png')} />
    <figcaption>Strona logowania WordPress</figcaption>
    
    <h3>Przegląd panelu administracyjnego WordPress</h3>
    <p>Panel administracyjny WordPress składa się z menu nawigacyjnego, gdzie możesz zarządzać stronami, wpisami, wtyczkami itp.</p>
    <img src="wordpress3.png" alt="Panel administracyjny WordPress" onClick={() => handleImageClick('wordpress3.png')} />
    <figcaption>Rysunek 5: Panel administracyjny WordPress</figcaption>

    <h3>Jak zaktualizować WordPressa i wtyczki?</h3>
    <p>Aby zaktualizować WordPressa i wtyczki, przejdź do sekcji "Aktualizacje" w panelu administracyjnym i postępuj zgodnie z instrukcjami.</p>
    <img src="wordpress4.png" alt="Aktualizacja WordPressa" onClick={() => handleImageClick('wordpress4.png')} />
    <figcaption>Rysunek 6: Aktualizacja WordPressa i wtyczek</figcaption>
  </>
);

export default Basics;
