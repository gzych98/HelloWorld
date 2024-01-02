import React from 'react';

const UserNameEmailPol = ({ data, handleChange, handleTypeChange }) => {
    return (
        <div className="username">
            <form className="contactForm">
                {/* Istniejące pola dla nazwy i e-maila */}
                <div className="form_line">
                    <label className="label" htmlFor="name">
                        Imię
                    </label>
                    <input className="input" name="name" type="text" placeholder="Imię..." value={data.name} onChange={handleChange} />
                </div>
                <div className='form_line'>
                    <label className="label" htmlFor="email">
                        E-mail
                    </label>
                    <input className="input" name="email" type="email" placeholder="E-mail..." value={data.email} onChange={handleChange} />
                </div>

                {/* Nowe pole wyboru dla typu strony */}
                <div className="form_line">

                    <label className="label" htmlFor="additionalNotes">
                        Jak mogę Ci pomóc?
                    </label>
                    <textarea
                        className="input"
                        name="additionalNotes"
                        placeholder="Chciałbym zrobić stronę internetową dla swojej działalności..."
                        value={data.additionalNotes}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default UserNameEmailPol;
