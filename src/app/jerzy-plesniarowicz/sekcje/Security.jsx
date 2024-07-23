import React from 'react';
import '../admin.css';

const Security = ({ handleImageClick }) => (
  <>
    <h3>Podstawowe zasady bezpieczeństwa</h3>
    <p>Bezpieczeństwo strony internetowej jest kluczowe. Zawsze używaj silnych haseł i aktualizuj oprogramowanie.</p>
    <img src="photo27.png" alt="Podstawowe zasady bezpieczeństwa" onClick={() => handleImageClick('photo27.png')} />
    <figcaption>Rysunek 27: Podstawowe zasady bezpieczeństwa</figcaption>
    
    <h3>Instalacja i konfiguracja wtyczek bezpieczeństwa</h3>
    <p>Wtyczki bezpieczeństwa, takie jak Wordfence, pomagają chronić Twoją stronę przed atakami.</p>
    <img src="photo28.png" alt="Wtyczki bezpieczeństwa" onClick={() => handleImageClick('photo28.png')} />
    <figcaption>Rysunek 28: Instalacja wtyczek bezpieczeństwa</figcaption>

    <h3>Tworzenie kopii zapasowych strony</h3>
    <p>Regularne tworzenie kopii zapasowych jest niezbędne do zabezpieczenia danych w przypadku awarii.</p>
    <img src="photo29.png" alt="Tworzenie kopii zapasowych" onClick={() => handleImageClick('photo29.png')} />
    <figcaption>Rysunek 29: Tworzenie kopii zapasowych strony</figcaption>
  </>
);

export default Security;
