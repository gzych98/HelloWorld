import React from 'react';
import '../admin.css';
import videoSrc from '../../../assets/edycja_kafelkow.mp4';  // Importowanie pliku wideo
import videoSrc2 from '../../../assets/Wordpress1.mp4';  // Importowanie pliku wideo
import videoSrc3 from '../../../assets/Wordpress2.mp4';  // Importowanie pliku wideo

export const ContentManagementContent = [
  { id: 'content-creation', title: 'Tworzenie i edytowanie stron' },
  { id: 'quick-edit', title: 'Szybka edycja strony' },
  { id: 'submission-form', title: 'Formularz zgłoszeniowy' },
  { id: 'footer-links', title: 'Linki w stopce' },
  { id: 'allow-svg', title: 'Zezwolenie na dodawanie plików SVG' },
  { id: 'aktualizuj_elementor', title: 'Nie działa Aktualizacja Elementor' },
];

const ContentManagement = ({ handleImageClick }) => (
  <>
    <h3 id="content-creation">Tworzenie i edytowanie stron</h3>
    <p>1. Lista wszytkich stron jest widoczna w zakładce Strony/Wszystkie strony,</p>
    <p>2. Dodałem do WordPress wtyczkę umożliwiającą powielenie wybranej strony.</p>
    <p>3. Pole szybkiej edycji pozwala zmodyfikować podstawowe parametry strony.</p>
    <img src="wordpress5.png" alt="Tworzenie nowej strony" onClick={() => handleImageClick('wordpress5.png')} />
    <figcaption>Rysunek 7: Tworzenie nowej strony w WordPress</figcaption>

    <h2>Dodawanie sekcji w aktualnościach</h2>
    <video width="600" controls>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <figcaption>Film: Dodawnia sekcji w aktualnościach</figcaption>
    <h2>Edycja www</h2>
    <video width="600" controls>
      <source src={videoSrc2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <figcaption>Film: Edycja 1</figcaption>
    <video width="600" controls>
      <source src={videoSrc3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <figcaption>Film: Edycja 2</figcaption>
    
    <h3 id="quick-edit">Szybka edycja strony</h3>
    <p>1. Tytuł jest wyświetlany m.in. w zakładkach przeglądarki.</p>
    <p>2. Nazwa uproszczona jest odnośnikiem do strony, twojadomena.pl/adres-strony (taka konfiguracja wymaga ustawienia odpowiednich permalinków).</p>
    <p>3. Ustawienie odpowiedniego statusu strony</p>
    <p>3.1 Opublikowano - strona widoczna dla każdego</p>
    <p>3.2 Oczekuje na przegląd/Szkic - niewidoczne dla użytkowników</p>
    <p>4. Element nadrzędny - pomaga w organizacji domeny</p>
    <p>5. Hasło jeżeli chcemy ograniczyć dostęp</p>
    <img src="wordpress6.png" alt="Tworzenie nowego wpisu" onClick={() => handleImageClick('wordpress6.png')} />
    <figcaption>Rysunek 8: Tworzenie nowego wpisu w WordPress</figcaption>

    <h3 id="submission-form">Formularz zgłoszeniowy</h3>
    <p>Otwieramy panel ustawień WPForms i przechodzimy do edycji formularza kontaktowego</p>    
    <img src="forms1.png" alt="Ustawienia WPForms" onClick={() => handleImageClick('forms1.png')} />
    <p>1. Przechodzimy do Powiadomień</p>    
    <p>2. Uzupełniamy dane</p>    
    <p>3. Zapisujemy</p>    
    <img src="forms2.png" alt="Ustawienia WPForms" onClick={() => handleImageClick('forms2.png')} />
    <p>Wtyczka, którą dodałem do strony, w wersji darmowej nie obsługuje przeglądania wpisów w panelu administratora WordPress. Powiadomienia przychodzą jedynie na maila wskazanego w ustawieniach formularza.</p>
    
    <img src="forms3.png" alt="Ustawienia WPForms" onClick={() => handleImageClick('forms3.png')} />

    <h3 id="footer-links">Edycja linków w stopce</h3>    
    <p>1. Otwieramy Wygląd\Elementor Header and Footer Builder</p>
    <p>2. Przechodzimy do Edycji w Elementorze</p>
    <img src="footer1.png" alt="Ustawienia Footer" onClick={() => handleImageClick('footer1.png')} />
    <p>1. Wybieramy ikonkę do edycji odnośnika</p>    
    <p>2. Wpisujemy adres www</p>    
    <p>3. Zapisujemy</p>    
    <img src="footer2.png" alt="Ustawienia Footer" onClick={() => handleImageClick('footer2.png')} />

    <h3 id="allow-svg">Zezwolenie na dodawanie plików SVG w WordPress</h3>
    <p>Aby zezwolić na dodawanie plików SVG do WordPress, musisz zmodyfikować funkcje motywu. Poniżej znajdziesz kroki, jak to zrobić:</p>
    <img src="svg1.png" alt="Edytor motywu" onClick={() => handleImageClick('svg1.png')} />
    <p>1. Zaloguj się do kokpitu WordPress.</p>
    <p>2. Przejdź do <strong>Wygląd &gt; Edytor motywu</strong> (Appearance &gt; Theme Editor).</p>
    <p>3. Otwórz plik <strong>functions.php</strong> swojego motywu.</p>
    <img src="svg2.png" alt="Plik functions.php" onClick={() => handleImageClick('svg2.png')} />
    <p>4. Dodaj poniższy kod na końcu pliku:</p>
    <pre>
      <code>
        {`<?php
        // Allow SVG
        function cc_mime_types($mimes) {
          $mimes['svg'] = 'image/svg+xml';
          return $mimes;
        }
        add_filter('upload_mimes', 'cc_mime_types');

        // Fix SVG
        function fix_svg() {
          echo '<style type="text/css">
            .attachment-266x266, .thumbnail img {
              width: 100% !important;
              height: auto !important;
            }
          </style>';
        }
        add_action('admin_head', 'fix_svg');
        ?>`}
      </code>
    </pre>
    <p>5. Zapisz zmiany.</p>
    <img src="svg3.png" alt="Zapisanie zmian" onClick={() => handleImageClick('svg3.png')} />
    <p>Po wykonaniu powyższych kroków będziesz mógł przesyłać pliki SVG do biblioteki multimediów WordPress.</p>
    <h2 id="aktualizuj_elementor">Nie działa "Aktualizuj" w Elementorze</h2>
    <p>Jest to błąd, który pojawia się po aktualizacji Elementora. Mimo że nie działa główny przycisk wprowadzone zmiany nadal można zapisać i nie utracić postępu prac</p>
    
    <img src="error_elementor_1.png" alt="Błąd przycisku Aktualizuj" onClick={() => handleImageClick('error_elementor_1.png')} />
    
    <img src="error_elementor_2.png" alt="Błąd przycisku Aktualizuj" onClick={() => handleImageClick('error_elementor_2.png')} />
  </>
);

export default ContentManagement;
