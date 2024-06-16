import React from 'react';
import '../admin.css';

const Introduction = ({ handleImageClick }) => (
  <>
    <h3>Co to jest Wordperss?</h3>
    <p>WordPress to najpopularniejszy system zarządzania treścią (CMS), który pozwala na łatwe tworzenie i zarządzanie stronami internetowymi bez potrzeby programowania.</p>
    <img src="wordpress1.png" alt="Wprowadzenie" onClick={() => handleImageClick('wordpress1.png')} />
    <figcaption>Wordpress</figcaption>
    <h3>Co to jest Elementor?</h3>
    <p>Elementor to zaawansowany kreator stron dla WordPressa, który umożliwia tworzenie pięknych i funkcjonalnych stron za pomocą prostego interfejsu drag-and-drop.</p>
    <img src="elementor1.png" alt="Wprowadzenie" onClick={() => handleImageClick('elementor1.png')} />
    <figcaption>Elementor</figcaption>
    <p>WordPress i Elementor razem oferują nieograniczone możliwości tworzenia stron internetowych, łącząc łatwość obsługi z potężnymi funkcjami personalizacji.</p>
  </>
);

export default Introduction;
