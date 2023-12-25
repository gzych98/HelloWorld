import React from 'react';

const SEOMarketingBudget = ({ data, handleChange }) => {
    return (
        <div className="seoMarketingBudget">
            <form className="contactForm">
                <div className="form_line">
                    <label className="label" htmlFor="seoInterest">
                        Zainteresowanie SEO
                    </label>
                    <input
                        className="input"
                        name="seoInterest"
                        type="text"
                        placeholder="Czy interesuje Cię optymalizacja pod wyszukiwarki (SEO)?"
                        value={data.seoInterest}
                        onChange={handleChange}
                    />
                </div>
                <div className="form_line">
                    <label className="label" htmlFor="budget">
                        Budżet
                    </label>
                    <input
                        className="input"
                        name="budget"
                        type="text"
                        placeholder="Jaki jest Twój przybliżony budżet na realizację strony?"
                        value={data.budget}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SEOMarketingBudget;
