import React from 'react';
import { Link } from 'react-scroll';

const TableOfContents = ({ content, activeSection }) => (
    <div className="toc">
        <h2>Spis treści</h2>
        <ul>
            {content.map(section => (
                <li key={section.id}>
                    <Link
                        to={section.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={0}
                        className={activeSection === section.id ? 'active' : ''}
                    >
                        {section.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default TableOfContents;
