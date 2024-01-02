import React from 'react';
import '../app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';




const FacebookLink = () => {
    return (
        <div className='facebookLinkContainer'>
            <a href="https://www.facebook.com/profile.php?id=61555251711630" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className='fa-2x' color='#333' />
            </a>
            {/* <a href="https://www.facebook.com/profile.php?id=61555251711630" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className='fa-2x' color='#333' />
            </a> */}
        </div>
    );
};

export default FacebookLink;
