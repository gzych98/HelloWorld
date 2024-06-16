import React from 'react';
import '../admin.css';

const Troubleshooting = ({ handleImageClick }) => (
  <>
    <h3>Co zrobić, gdy strona nie działa?</h3>
    <p>Gdy strona przestaje działać, sprawdź połączenie z internetem, zaktualizuj przeglądarkę i upewnij się, że wszystkie wtyczki i motywy są aktualne.</p>
    <img src="photo30.png" alt="Rozwiązywanie problemów" onClick={() => handleImageClick('photo30.png')} />
    <figcaption>Rysunek 30: Rozwiązywanie problemów</figcaption>
    
    <h3>Jak przywrócić stronę z kopii zapasowej?</h3>
    <p>Jeśli masz kopię zapasową, możesz przywrócić stronę do wcześniejszego stanu, korzystając z wtyczki do tworzenia kopii zapasowych.</p>
    <img src="photo31.png" alt="Przywracanie kopii zapasowej" onClick={() => handleImageClick('photo31.png')} />
    <figcaption>Rysunek 31: Przywracanie kopii zapasowej</figcaption>

    <h3>Gdzie szukać pomocy?</h3>
    <p>W przypadku problemów możesz szukać pomocy na forach WordPressa, stronach z dokumentacją lub kontaktując się z pomocą techniczną hostingu.</p>
    <img src="photo32.png" alt="Gdzie szukać pomocy" onClick={() => handleImageClick('photo32.png')} />
    <figcaption>Rysunek 32: Gdzie szukać pomocy</figcaption>
  </>
);

export default Troubleshooting;
