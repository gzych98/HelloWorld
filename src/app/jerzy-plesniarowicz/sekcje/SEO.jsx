import React from 'react';
import '../admin.css';

const SEO = ({ handleImageClick }) => (
  <>
    <h3>Wprowadzenie do SEO</h3>
    <p>SEO, czyli optymalizacja dla wyszukiwarek, polega na dostosowywaniu treści i struktury strony internetowej, aby była lepiej widoczna w wynikach wyszukiwania.</p>
    <img src="photo24.png" alt="Wprowadzenie do SEO" onClick={() => handleImageClick('photo24.png')} />
    <figcaption>Rysunek 24: Wprowadzenie do SEO</figcaption>
    
    <h3>Korzystanie z wtyczki SEO (np. Yoast SEO)</h3>
    <p>Yoast SEO to popularna wtyczka do WordPressa, która pomaga w optymalizacji treści pod kątem SEO.</p>
    <img src="photo25.png" alt="Yoast SEO" onClick={() => handleImageClick('photo25.png')} />
    <figcaption>Rysunek 25: Yoast SEO</figcaption>

    <h3>Optymalizacja obrazków i treści</h3>
    <p>Optymalizacja obrazków i treści jest kluczowa dla poprawy wydajności strony i jej widoczności w wyszukiwarkach.</p>
    <img src="photo26.png" alt="Optymalizacja obrazków" onClick={() => handleImageClick('photo26.png')} />
    <figcaption>Rysunek 26: Optymalizacja obrazków i treści</figcaption>
  </>
);

export default SEO;
