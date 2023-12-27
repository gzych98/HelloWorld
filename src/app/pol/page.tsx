import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import MainForm from '../../components/MainForm'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCarousel from '@/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <main>
      <div className="page" id="page1">
        <div className="background" id="home">
          <div className="content-container" id='home'>
            <h1>Kreatywne rozwiązania programistyczne</h1>
            <p>Wdrażamy twoją cyfrową wizję do rzeczywistości</p>
            <a href='#form'>
              <button>Zrealizuj z nami swój projekt!</button>
            </a>
          </div>
        </div>
        <div className="advert" id="home">
          <div className="content-container" id="advert">
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className="page" id="web_solutions">
        <div className="content-container" id="cont1">
          <h1>Różnorodne usługi informatyczne</h1>
        </div>
        <div className="content-container" id="cont2">
          <div className="table1" id="col1">
          <h2>Innowacyjne projektowanie stron internetowych</h2>
            <p>Wyróżnij swoją markę dzięki projektom szytym na miarę. Nasze unikalne rozwiązania internetowe zapewniają funkcjonalność, responsywność i styl, który przyciąga odbiorców i podkreśla Twoją obecność w Internecie.  </p>
          </div>
          <div className="table1" id="col2">
            <h2>Zaawansowane usługi programistyczne</h2>
            <p>Rozwijaj swój biznes dzięki naszym niestandardowym usługom w zakresie oprogramowania. Specjalizujemy się w tworzeniu zaawansowanego oprogramowania, które usprawnia procesy biznesowe, zwiększa wydajność i zapewnia skalowalne rozwiązania dostosowane do Twoich oczekiwań. </p>
          </div>
          <div className="table1" id="col3">
            <h2>Rozwój aplikacji</h2>
            <p>Przekształć swoje pomysły w rzeczywistość dzięki naszym usługom tworzenia aplikacji. Oferujemy kompleksowe rozwiązania w zakresie projektowania i tworzenia aplikacji mobilnych i desktopowych, które są intuicyjne, szybkie i dostosowane do potrzeb Twojej firmy i klientów. </p>
          </div>
        </div>
      </div>
      <div className="page" id="case_studies">
        <div className="content-container" id="cont3">
          <div className="table2" id="col1">
            <h2>Kształtowanie identyfikacji wizualnej</h2>
            <p>Przekształć obecność swojej marki dzięki naszym usługom projektowania identyfikacji wizualnej. Koncentrujemy się na tworzeniu charakterystycznego wizerunku marki, który przyciąga uwagę i angażuje odbiorców. Dzięki połączeniu kreatywności i strategii projektujemy elementy wizualne, które są nie tylko estetyczne, ale także komunikują główne przesłanie marki. Pozwól nam pomóc Ci wywrzeć trwałe wrażenie w cyfrowym krajobrazie. </p>              
             
          </div>
          <div className="table22" id="col2">
            <FontAwesomeIcon icon={faRankingStar} className='myicon fa-3x' color='#333' />
            <h2>Marketing</h2>
            <p>Przebij się przez szum dzięki naszym ukierunkowanym strategiom marketingowym. Od kampanii opartych na danych po kreatywne opowiadanie historii, pozycjonujemy Twoją markę, aby osiągnąć maksymalny wpływ i zwrot z inwestycji. Podnieś swój marketing, aby przyciągnąć właściwych odbiorców.</p>
          </div>
        </div>
      </div>
      <div className="page" id="case_studies">
        <div className="content-container" id="cont3">
          <div className="table22" id="col3">
            <FontAwesomeIcon icon={faUsers} className='myicon fa-3x' color='#333' />
            <h2>Social Media</h2>
            <p>Wzmocnij głos swojej marki na platformach społecznościowych. Nasz zespół tworzy angażujące treści i projekty, które rezonują z odbiorcami, wspierając społeczność i konwersację. Sprawmy, aby Twoja marka stała się tematem rozmów w mediach społecznościowych.</p>
          </div>
          <div className="table22" id="col4">
            <FontAwesomeIcon icon={faPrint} className='myicon fa-3x' color='#333' />
            <h2>Produkty poligraficzne</h2>
            <p>Wciel swoje pomysły w życie dzięki naszym niestandardowym rozwiązaniom w zakresie druku. Niezależnie od tego, czy chodzi o wizytówki, broszury czy banery, zapewniamy wysokiej jakości druk, który odzwierciedla doskonałość Twojej marki. Nawiąż kontakt z klientami offline za pomocą druku, który się wyróżnia.</p>
          </div>
        </div>
      </div>
      <div className="page" id="form">
        <div className="content-container" id="cont4">
          <div className="table3" id="col1">
            <div className="form">
              <div className="circle">
                <FontAwesomeIcon icon={faEnvelope} className='fa-2x' color='#fff' />
              </div>
              <MainForm />
              
              {/* <button>Continue</button> */}
            </div>
          </div>
          <div className="table3" id="col2">
            <p>Rozpocznij budowę projektu</p>
            <h2>Z łatwością rozpocznij swoją przygodę online</h2>
            <h3>Witamy na pierwszym etapie tworzenia swojej cyfrowej obecności! Nasz prosty formularz został zaprojektowany tak, aby zebrać tylko niezbędne informacje, zapewniając płynne rozpoczęcie tworzenia projektu.</h3>
            <h3>Po kliknięciu przycisku Dalej zostaniesz poprowadzony przez kilka bardziej dostosowanych wyborów, upewniając się, że każdy aspekt projektu jest zgodny z Twoją wizją. Nasz zespół będzie następnie pracował za kulisami, tworząc witrynę, która nie tylko świetnie wygląda, ale także działa bezbłędnie.</h3>
          </div>          
        </div>
      </div>
      <div className="page" id="contact">
        <div className="content-container" id="cont5">
        <div className="content-container" id="cont6">
          <div className='contact_data'>
            <h1>Skontaktuj się z nami</h1>
            <div className='contact_tab'>
              <img  src="/black_2.png"
                alt="Opis obrazu"
                width={100}
                height={100} 
                className="footer_logo"
              />
              <div className='contact_col'>
                <h2>Jesteśmy tutaj, aby wysłuchać i odpowiedzieć na wszelkie pytania. Niezależnie od tego, czy jesteś zainteresowany rozpoczęciem projektu, potrzebujesz pomocy z istniejącą usługą, czy po prostu chcesz się przywitać, nasz zespół jest gotowy udzielić Ci potrzebnych informacji i wsparcia. Skontaktuj się z nami za pośrednictwem jednego z poniższych kanałów, a na pewno szybko się z Tobą skontaktujemy.</h2>
                <h3>Miasto</h3>
                <h2>Kraków</h2>
                <h3>E-mail</h3>
                <h2>office@gtcodelab.com</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
