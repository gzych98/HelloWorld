"use client"
import React, { useState } from 'react';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faUsers, faEnvelope, faPrint, faGlobe, faImage, faCode, faDesktop, faServer, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
// import { faPrint } from '@fortawesome/free-solid-svg-icons';
import MainFormPol2 from '@/components/MainFormPol2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_pol from './footer';
import NavBar02 from '@/components/navbar/navbar';
import Swal from 'sweetalert2';
import Script from 'next/script';

export default function Home() {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const handleGridClick = () => {
    setIsGridVisible(!isGridVisible); // Przełącza stan widoczności
  };
  const handleImageClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Zapobiega propagacji do rodzica
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('office@gtcodelab.com')
      .then(() => {
        Swal.fire({
          title: 'Skopiowano!',
          text: 'Adres email został skopiowany do schowka.',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        // Możesz tu dodać powiadomienie, że kopiowanie się udało
        console.log('Adres email został skopiowany do schowka');
      })
      .catch(err => {
        // Obsługa błędu kopiowania
        console.error('Nie udało się skopiować adresu email', err);
      });
  };
  return (
    <main>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-0Q0FPBF0FG" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-0Q0FPBF0FG');
        `}
      </Script>
      <NavBar02 />
      <div className="page hero" id="page1">
        <div className="background" id="home">
          <div className="content-container" id='home'>
            <h1>GT Code Lab</h1>
            <p className='p-light'>Kreatywne rozwiązania programistyczne</p>
            <div className='solutions'>
              <div className='solutions-col'>
                <FontAwesomeIcon icon={faGlobe} className=' fa-3x' color='#fff' />
                <h2>Strony WWW</h2>
              </div>
              <div className='solutions-col'>
                <FontAwesomeIcon icon={faImage} className=' fa-3x' color='#fff' />
                <h2>Identyfikacja<br />wizualna</h2>
              </div>
              <div className='solutions-col'>
                <FontAwesomeIcon icon={faCode} className=' fa-3x' color='#fff' />
                <h2>Aplikacje</h2>
              </div>
            </div>
            <a href='#form'>
              <button className='button-light'>Zrealizuj z nami swój projekt!</button>
            </a>
          </div>
        </div>
        <div className="advert" id="home">
          <div className="content-container" id="advert">
          </div>
        </div>
      </div >
      {/* page1 */}
      <div className='page'>
        <div className="p-content-container">
          <h1>O nas</h1>
          <h2>Kim jesteśmy?</h2>
          <div className='p-row p-column2'>
            <div className='p-column1 '>
              <p>Witamy w <span style={{ fontWeight: 'bold' }}>GT Code Lab</span>, miejscu, gdzie <span style={{ fontWeight: 'bold' }}>technologia spotyka się z kreatywnością</span>. Nasza historia zaczyna się na kampusie Akademii Górniczo-Hutniczej,
                gdzie dwóch absolwentów połączyło swoją pasję do projektowania i technologii cyfrowej, aby stworzyć coś wyjątkowego.</p>
              <p>Jesteśmy zespołem, który wierzy, że <span style={{ fontWeight: 'bold' }}>każdy projekt jest wyjątkowy</span> i zasługuje na to, aby jego wizja była
                widoczna i doceniana w świecie cyfrowym. Dążymy do tego, aby nasze usługi były dostępne dla szerokiego spektrum klientów – od małych lokalnych biznesów, takich jak warsztaty samochodowe,
                salony fryzjerskie, restauracje, aż po większe przedsiębiorstwa poszukujące rozbudowanych rozwiązań internetowych. Żyjemy w
                czasach, gdy <span style={{ fontWeight: 'bold' }}>technologia rozwija się w zawrotnym tempie</span>, a my chcemy być mostem, który połączy Twój biznes z nowoczesnym światem Internetu.</p>
              <p>Nasza specjalność to <span style={{ fontWeight: 'bold' }}>tworzenie stron internetowych</span>, które nie tylko są estetycznie przyjemne, ale również
                funkcjonalne, intuicyjne i dostosowane do potrzeb każdego klienta. Łączymy <span style={{ fontWeight: 'bold' }}>najnowsze technologie</span> z <span style={{ fontWeight: 'bold' }}>indywidualnym
                  podejściem</span>, aby każdy projekt był niepowtarzalny i skrojony na miarę Twoich potrzeb.</p>
              <p>W <span style={{ fontWeight: 'bold' }}>GT Code Lab</span> wierzymy, że każdy projekt jest wyjątkowy i zasługuje na <span style={{ fontWeight: 'bold' }}>indywidualne podejście</span>. Dzięki naszemu
                doświadczeniu, kreatywności i <span style={{ fontWeight: 'bold' }}>ciągłemu dążeniu do doskonałości</span>, jesteśmy gotowi podjąć wyzwanie i pomóc Tobie i Twojej firmie zaistnieć w cyfrowym świecie.</p>
              <a href='/#form'>Zapraszamy do współpracy!</a>
            </div>
          </div>
          <div className='p-hr' />
        </div>
      </div>
      {/* page2 */}
      <div className='page' id='service-www'>
        <div className="p-content-container">
          <h1>Usługi informatyczne</h1>
          <h2>Nasza oferta</h2>
          <div className='p-column'>
            <div className='p-row'>
              <div className='p-column1 width-20'>
                <FontAwesomeIcon icon={faImage} className='p-icon fa-3x' color='#333' />
              </div>
              <div className='p-column1 width-80'>
                <h2>Identyfikacja wizualna</h2>
                <p>Podkreśl wyjątkowość Twojej marki dzięki naszym spersonalizowanym projektom identyfikacji wizualnej. Tworzymy unikalne logotypy i wzory, które nie tylko odzwierciedlają charakter Twojej firmy, ale także wyróżniają ją na tle konkurencji. Nasze projekty to połączenie kreatywności i strategii, zapewniające silną i zapadającą w pamięć obecność w świecie cyfrowym.</p>
              </div>
            </div>
          </div>
          <div className='p-column clickable' onClick={handleGridClick}>
            <div className='p-row'>
              <div className='p-column1 width-20'>
                <FontAwesomeIcon icon={faDesktop} className='p-icon fa-3x' color='#333' />
              </div>
              <div className='p-column1 width-80'>
                <h2>Front-end</h2>
                <p>Przyciągnij i zachwyć swoich użytkowników wyjątkowym designem i intuicyjną nawigacją. W naszych projektach frontendowych łączymy estetykę z funkcjonalnością, tworząc responsywne i dostosowane do urządzeń mobilnych strony internetowe. Każdy element jest starannie zaprojektowany, aby zapewnić Twoim klientom płynne i przyjemne doświadczenie cyfrowe.</p>
                <p style={{ fontWeight: 'bold' }}>Kliknij i sprawdź projekty!</p>
              </div>
            </div>
            <div className='p-row no-hover'>
              {isGridVisible && (<div className='p-grid'>
                <div className='p-grid__kostka' onClick={handleImageClick}>
                  <h2>Nasze realizacje</h2>
                </div>
                <img src="img_template.png" alt="Obrazek 1" onClick={handleImageClick} />
                <img src="img_template.png" alt="Obrazek 2" onClick={handleImageClick} />
                <img src="img_template.png" alt="Obrazek 3" onClick={handleImageClick} />
                <img src="img_template.png" alt="Obrazek 4" onClick={handleImageClick} />
                <img src="img_template.png" alt="Obrazek 5" onClick={handleImageClick} />
              </div>)}
            </div>
          </div>
          <div className='p-column'>
            <div className='p-row'>
              <div className='p-column1 width-20'>
                <FontAwesomeIcon icon={faServer} className='p-icon fa-3x' color='#333' />
              </div>
              <div className='p-column1 width-80'>
                <h2>Back-end</h2>
                <p>Zapewnij swojej stronie niezawodne i efektywne działanie dzięki naszym rozwiązaniom backendowym. Skupiamy się na tworzeniu silnych fundamentów Twojej obecności online, zapewniając stabilność, bezpieczeństwo i skalowalność. Nasze zaawansowane systemy zarządzania bazami danych i integracje z API gwarantują, że Twoja strona jest zawsze gotowa sprostać oczekiwaniom Twoich użytkowników.</p>
              </div>
            </div>
          </div>
          <div className='p-column'>
            <div className='p-row'>
              <div className='p-column1 width-20'>
                <FontAwesomeIcon icon={faMobile} className='p-icon fa-3x' color='#333' />
              </div>
              <div className='p-column1 width-80'>
                <h2>Rozwój aplikacji</h2>
                <p>Zrealizuj swój pomysł na aplikację z naszym profesjonalnym wsparciem. Tworzymy aplikacje webowe i mobilne, które łączą innowacyjność z funkcjonalnością. Nasze indywidualnie dopasowane rozwiązania są projektowane, aby nie tylko odpowiadać na specyficzne potrzeby Twojego biznesu, ale także by wyznaczać nowe standardy w branży cyfrowej. Z nami Twoja aplikacja stanie się potężnym narzędziem w rękach Twoich klientów.</p>
              </div>
            </div>
          </div>
          <div className='p-hr'>
          </div>
        </div>
      </div>
      {/* START Strona 4 */}
      <div className='page' id='form'>
        <div className="p-content-container">
          <h1>Rozpocznij budowę projektu</h1>
          <h2>Formularz kontaktowy</h2>
          <p>Formularz stworzony, aby ułatwić Ci przekazywanie
            zapytań, sugestii, czy opinii. Podaj tylko podstawowe informacje,
            a nasi specjaliści skontaktują się z Tobą, aby omówić Twoje potrzeby
            i odpowiedzieć na wszystkie pytania. Twój komfort i satysfakcja są
            dla nas priorytetem. Zapewniamy, że każde zapytanie zostanie potraktowane
            indywidualnie i z należytą uwagą.</p>
          <p style={{ color: '#2B70E4' }}>Czekamy na Twoją wiadomość!</p>
          <div className="p-form">
            <div className="p-form__circle">
              <FontAwesomeIcon icon={faEnvelope} className='fa-2x' color='#fff' />
            </div>
            <MainFormPol2 />
          </div>
        </div>
      </div>
      {/* END Strona 4 */}
      {/* START Strona 3 */}
      <div className='page' id='service-visual'>
        <div className="p-content-container">
          <h1>Kształtowanie identyfikacji wizualnej</h1>
          <h2>Usługi projektowania wizerunku marki</h2>
          <div className='p-row'>
            <div className='p-column1 width-20'>
              <FontAwesomeIcon icon={faRankingStar} className='p-icon fa-3x' color='#333' />
            </div>
            <div className='p-column1 width-80'>
              <h2>Marketing</h2>
              <p>Przebij się przez szum dzięki naszym ukierunkowanym strategiom marketingowym. Od kampanii opartych na danych po kreatywne opowiadanie historii, pozycjonujemy Twoją markę, aby osiągnąć maksymalny wpływ i zwrot z inwestycji. Podnieś swój marketing, aby przyciągnąć właściwych odbiorców.</p>
            </div>
          </div>
          <div className='p-row'>
            <div className='p-column1 width-20'>
              <FontAwesomeIcon icon={faUsers} className='p-icon fa-3x' color='#333' />
            </div>
            <div className='p-column1 width-80'>
              <h2>Social Media</h2>
              <p>Wzmocnij głos swojej marki na platformach społecznościowych. Nasz zespół tworzy angażujące treści i projekty, które rezonują z odbiorcami, wspierając społeczność i konwersację. Sprawmy, aby Twoja marka stała się tematem rozmów w mediach społecznościowych.</p>
            </div>
          </div>
          <div className='p-row'>
            <div className='p-column1 width-20'>
              <FontAwesomeIcon icon={faPrint} className='p-icon fa-3x' color='#333' />
            </div>
            <div className='p-column1 width-80'>
              <h2>Produkty poligraficzne</h2>
              <p>Wciel swoje pomysły w życie dzięki naszym niestandardowym rozwiązaniom w zakresie druku. Niezależnie od tego, czy chodzi o wizytówki, broszury czy banery, zapewniamy wysokiej jakości druk, który odzwierciedla doskonałość Twojej marki. Nawiąż kontakt z klientami offline za pomocą druku, który się wyróżnia.</p>
            </div>
          </div>
          <div className='p-hr'>
          </div>
        </div>
      </div>
      {/* END Strona 3 */}
      {/* START Strona 5 */}
      <div className='page' id='contact'>
        <div className="p-content-container p-last-container">
          <h1>Skontaktuj się z nami</h1>
          <h2>Jesteśmy tutaj, aby wysłuchać i odpowiedzieć na wszelkie pytania</h2>
          <div className='p-contact'>
            <div className='p-column1'>
              <p style={{ textAlign: 'center' }}>E-mail</p>
              <a className='p-copy-mail' onClick={copyEmailToClipboard} title="Kliknij aby skopiować maila">office@gtcodelab.com</a>
            </div>
          </div>
          <img src="/black_2.png"
            alt="Opis obrazu"
            width={100}
            height={100}
            className="footer_logo"
          />
          <div className='p-column1__image ' />
        </div>
      </div>
      {/* END Strona 5 */}
      <Footer_pol />
    </main >
  )
}
