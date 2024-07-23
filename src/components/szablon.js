import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Szablon = ({ data, handleChange }) => {
    return (
        <div className="generalInfo">
            <form className="contactForm">
                <div className="form_line">
                    <label className="label" htmlFor="websitePurpose">
                        Cel Strony
                    </label>
                    <input
                        className="input"
                        name="websitePurpose"
                        type="text"
                        placeholder="Jaki jest główny cel Twojej strony?"
                        value={data.websitePurpose}
                        onChange={handleChange}
                    />
                </div>
                <div className="form_line">
                    <label className="label" htmlFor="targetAudience">
                        Grupa Docelowa
                    </label>
                    <input
                        className="input"
                        name="targetAudience"
                        type="text"
                        placeholder="Kim jest Twoja główna grupa docelowa?"
                        value={data.targetAudience}
                        onChange={handleChange}
                    />
                </div>
                <div className="form_line">
                    <label className="label">
                        Funkcje Strony
                    </label>
                    <div className="checkbox_group">
                        <div>
                            <input
                                type="checkbox"
                                id="opcja1"
                                name="opcja1"
                                checked={data.opcja1}
                                onChange={handleChange}
                            />
                            <label htmlFor="opcja1">Opcja 1</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="opcja2"
                                name="opcja2"
                                checked={data.opcja2}
                                onChange={handleChange}
                            />
                            <label htmlFor="opcja2">Opcja 2</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="opcja3"
                                name="opcja3"
                                checked={data.opcja3}
                                onChange={handleChange}
                            />
                            <label htmlFor="opcja3">Opcja 3</label>
                        </div>
                        <label className="label" htmlFor="additionalNotes">
                        Dodatkowe Uwagi
                        </label>
                        <textarea
                            className="input"
                            name="additionalNotes"

                            placeholder="Czy są jakieś inne specjalne wymagania lub oczekiwania dotyczące projektu?"
                            value={data.additionalNotes}
                            onChange={handleChange}
                        />
                        {/* Można dodać więcej opcji zgodnie z potrzebami */}
                    </div>
                </div>
                <div className="form_line">
                    <label className="label">
                        Projekt graficzny
                    </label>
                    <div className="checkbox_group">
                        <div>
                            <input
                                type="checkbox"
                                id="opcja1"
                                name="opcja1"
                                checked={data.opcja1}
                                onChange={handleChange}
                            />
                            <label htmlFor="opcja1">Tak</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="opcja2"
                                name="opcja2"
                                checked={data.opcja2}
                                onChange={handleChange}
                            />
                            <label htmlFor="opcja2">Nie</label>
                        </div>
                        <label className="label" htmlFor="additionalNotes">
                        Dodatkowe Uwagi
                        </label>
                        <textarea
                            className="input"
                            name="additionalNotes"

                            placeholder="Czy są jakieś inne specjalne wymagania lub oczekiwania dotyczące projektu?"
                            value={data.additionalNotes}
                            onChange={handleChange}
                        />
                        {/* Można dodać więcej opcji zgodnie z potrzebami */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Szablon;
