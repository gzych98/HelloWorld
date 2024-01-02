import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WebsiteForm = ({ data, handleChange }) => {
    return (
        <div className="generalInfo">
            <form className="contactForm">
            <div className="form_line">
                    <label className="label">
                        Main purpose of the website
                    </label>
                    <div className="checkbox_group">
                        <div>
                            <input
                                type="checkbox"
                                id="wwwOpcja1"
                                name="wwwOpcja1"
                                checked={data.wwwOpcja1}
                                onChange={handleChange}
                            />
                            <label htmlFor="wwwOpcja1">Portfolio</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="wwwOpcja2"
                                name="wwwOpcja2"
                                checked={data.wwwOpcja2}
                                onChange={handleChange}
                            />
                            <label htmlFor="wwwOpcja2">E-commerce</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="wwwOpcja3"
                                name="wwwOpcja3"
                                checked={data.wwwOpcja3}
                                onChange={handleChange}
                            />
                            <label htmlFor="wwwOpcja3">Landing Page</label>
                        </div>
                    </div>
                </div>
                <div className="form_line">
                    <label className="label" htmlFor="websitePurpose">
                        What is your business?
                    </label>
                    <input
                        className="input"
                        name="websitePurpose"
                        type="text"
                        placeholder="I am a photographer..."
                        value={data.websitePurpose}
                        onChange={handleChange}
                    />
                </div>
                <div className="form_line">
                    <label className="label">
                        Grahic design
                    </label>
                    <div className="checkbox_group">
                        <div>
                            <input
                                type="checkbox"
                                id="grafika1"
                                name="grafika1"
                                checked={data.grafika1}
                                onChange={handleChange}
                            />
                            <label htmlFor="grafika1">Yes</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="grafika2"
                                name="grafika2"
                                checked={data.grafika2}
                                onChange={handleChange}
                            />
                            <label htmlFor="grafika2">No</label>
                        </div>
                        {/* Można dodać więcej opcji zgodnie z potrzebami */}
                    </div>
                    <label className="label" htmlFor="additionalNotes">
                        Additional comments
                    </label>
                    <textarea
                        className="input"
                        name="additionalNotes"
                        style={{ height: '6em' }}
                        placeholder="Are there any other special requirements or expectations for the project?"
                        value={data.additionalNotes}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default WebsiteForm;
