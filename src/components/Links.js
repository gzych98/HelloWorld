'use client'
import React from 'react';
import '../app/styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';



const FacebookLink = () => {
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('office@gtcodelab.com')
            .then(() => {
                Swal.fire({
                    title: 'Skopiowano!',
                    text: 'Adres email został skopiowany do schowka.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                // Możesz tu dodać powiadomienie, że kopiowanie się udało
                console.log('Adres email został skopiowany do schowka');
            })
            .catch(err => {
                // Obsługa błędu kopiowania
                console.error('Nie udało się skopiować adresu email', err);
            });
    };

    return (
        <div className='facebookLinkContainer' >
            <a href="https://www.facebook.com/profile.php?id=61555251711630" target="_blank" rel="noopener noreferrer" title="Odwiedź naszą stronę Facebook">
                <FontAwesomeIcon icon={faFacebookF} className='fa-1x' color='#333' />
            </a>
            <a onClick={copyEmailToClipboard} title="Kliknij aby skopiować maila">
                <FontAwesomeIcon icon={faEnvelope} className='fa-1x' color='#333' />
            </a>
        </div>
    );
};

export default FacebookLink;
