'use client'
import React from 'react';
import '../../app/styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';



const MailLink = () => {
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
        <a className='p-contact' onClick={copyEmailToClipboard} title="Kliknij aby skopiować maila">
            <FontAwesomeIcon icon={faEnvelope} className='fa-1x' color='#333' />
        </a>
    );
};

export default MailLink;
