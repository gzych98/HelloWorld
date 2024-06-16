import React from 'react';
import '../admin.css';

const UserManagement = ({ handleImageClick }) => (
  <>
    <h3>Jak dodać nowych użytkowników?</h3>
    <p>Aby dodać nowych użytkowników, przejdź do sekcji "Użytkownicy" i kliknij "Dodaj nowego".</p>
    <img src="photo21.png" alt="Dodawanie użytkownika" onClick={() => handleImageClick('photo21.png')} />
    <figcaption>Rysunek 21: Dodawanie nowego użytkownika w WordPressie</figcaption>
    
    <h3>Różnice między rolami użytkowników</h3>
    <p>Administrator, redaktor, autor, współpracownik i subskrybent - każdy z tych ról ma różne uprawnienia.</p>
    <img src="photo22.png" alt="Role użytkowników" onClick={() => handleImageClick('photo22.png')} />
    <figcaption>Rysunek 22: Role użytkowników w WordPressie</figcaption>

    <h3>Edycja i usuwanie użytkowników</h3>
    <p>Aby edytować lub usuwać użytkowników, przejdź do sekcji "Użytkownicy" i wybierz odpowiednie opcje.</p>
    <img src="photo23.png" alt="Edycja i usuwanie użytkowników" onClick={() => handleImageClick('photo23.png')} />
    <figcaption>Rysunek 23: Edycja i usuwanie użytkowników w WordPressie</figcaption>
  </>
);

export default UserManagement;
