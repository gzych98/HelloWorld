import React from 'react';

const UserNameEmail = ({ data, handleChange, handleTypeChange  }) => {
    return (
        <div className="username">
            <form className="contactForm">
                {/* Istniejące pola dla nazwy i e-maila */}
                <div className="form_line">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input className="input" name="name" type="text" placeholder="Name..." value={data.name} onChange={handleChange} />
                </div>
                <div className='form_line'>
                    <label className="label" htmlFor="email">
                        E-mail
                    </label>
                    <input className="input" name="email" type="email" placeholder="E-mail..." value={data.email} onChange={handleChange} />
                </div>

                {/* Nowe pole wyboru dla typu strony */}
                <div className="form_line">
                    <label className="label" htmlFor="websiteType">
                        Project type
                    </label>
                    <select
                        className="input"
                        name="websiteType"
                        value={data.websiteType}
                        onChange={handleTypeChange}>
                        <option value="website">Website</option>
                        <option value="software">Software</option>
                        <option value="application">App Development</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default UserNameEmail;
