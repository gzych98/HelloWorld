"use client";
import { useState } from 'react'
import UserNameEmailPol from './UserNameEmail_pol'
import './form.css'
import Swal from 'sweetalert2';

const MainFormPol2 = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        additionalNotes: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendTestEmailTemp = async () => {
        console.log("Wysyłam do serwera: ", data);

        const response = await fetch('../pages/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject: 'Formularz GT Code Lab',
                message: 'To jest treść wiadomości:',
                formData: data
            })
        });
        const responseData = await response.json();
        console.log(a)
        console.log("Odpowiedź serwera: ", responseData);
    }

    const sendTestEmail = async () => {
        console.log("Wysyłam do serwera: ", data);

        try {
            const response = await fetch('../pages/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: 'Formularz GT Code Lab',
                    message: 'To jest treść wiadomości:',
                    formData: data
                })
            });

            if (!response.ok) {
                throw new Error(`Błąd HTTP: status ${response.status}`);
            }

            let responseData;
            try {
                responseData = await response.json();
            } catch (e) {
                throw new Error("Błąd przetwarzania odpowiedzi JSON.");
            }

            console.log("Odpowiedź serwera: ", responseData);
            // Tutaj możesz obsłużyć dane odpowiedzi, np. wyświetlić powiadomienie
        } catch (error) {
            console.error("Wystąpił błąd: ", error.message);
            // Tutaj możesz obsłużyć błąd, np. wyświetlić powiadomienie o błędzie
            Swal.fire({
                title: 'Błąd',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }

    const handleSubmit = () => {
        if (!isValidEmail(data.email)) {
            Swal.fire({
                title: 'Błąd',
                text: 'Nieprawidłowy adres e-mail',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }
        sendTestEmail();
        Swal.fire({
            title: 'Dziękujemy za zgłoszenie',
            text: 'Nasz zespół analizuje Twoją prośbę i wkrótce się z Tobą skontaktuje',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }

    const isValidEmail = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <div className='activeTab'>
            <UserNameEmailPol data={data} handleChange={handleChange} />
            <div className='mainFormButton'>
                <button onClick={handleSubmit}>Wyślij</button>
            </div>
        </div>
    );
}

export default MainFormPol2;
