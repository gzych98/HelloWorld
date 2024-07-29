import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styles_social_share.css';

const SocialShare = () => (
    <div className="social-share">
        
        <a href="https://www.facebook.com/profile.php?id=61555251711630" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/gt_code_lab" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
);

export default SocialShare;
