"use client";
import { useState, useEffect } from 'react'
import UserNameEmailPol from './UserNameEmail_pol'
import WebsiteForm from './website_form';
import './form.css'
import Swal from 'sweetalert2';


const MainFormPol = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        projectName: "",        
        wwwOpcja1: false,
        wwwOpcja2: false,
        wwwOpcja3: false,
        websiteType: "",
        additionalNotes: "",
        grafika1: false,
        grafika2: false,
    })

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('')

    const sendMail = async (e) => {
        e.preventDefault();
    
        const response = await fetch('../api/sendEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                subject: 'Temat Wiadomości', // Ustaw właściwy temat
                message: 'Treść wiadomości', // Ustaw treść wiadomości
                formData: data // Tutaj dodajesz dane formularza
            })
        });
        console.log(await response.json());
    }  

    const sendTestEmail = async () => {
        console.log("Wysyłam do serwera: ", data)

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
        console.log("Odpowiedź serwera: ", responseData);
    }


    const [selectedWebsiteType, setSelectedWebsiteType] = useState('website');

    const handleTypeChange = (event) => {
        const { value } = event.target;
        setData(prevData => ({
            ...prevData,
            websiteType: value,
        }));
        setSelectedWebsiteType(value);
    };

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        if (type === "checkbox") {
            setData({
                ...data,
                [name]: checked,
            });
        } else {
            setData({
                ...data,
                [name]: value,
            });
        }
    }; 

    const handleSubmit = (e) => {
        if(!isValidEmail(data.email)) {
            Swal.fire({
                title: 'Błąd',
                text: 'Nieprawidłowy adres e-mail',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }
        console.log(data)  
        sendMail(e); 
        Swal.fire({
            title: 'Dziękujemy za zgłoszenie',
            text: 'Nasz zespół analizuje Twoją prośbę i wkrótce się z Tobą skontaktuje',
            icon: 'success',
            confirmButtonText: 'Ok'
        })     
        //resetForm();
    }

    const resetForm = () => {
        setData({
            name: "",
            email: "",
            projectName: "",        
            opcja1: false,
            opcja2: false,
            opcja3: false,
            websiteType: "",
            additionalNotes: "",
        });
    }

    const isValidEmail = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const [activeTab, setActiveTab] = useState(0);
    
    useEffect(() => {
        console.log("Aktualnie wybrany typ formularza:", selectedWebsiteType);
    }, [selectedWebsiteType]); 

    const formElements = {
        'website': [
            <UserNameEmailPol key="user-name-email-website" data={data} handleChange={handleChange} handleTypeChange={handleTypeChange} />,
            <WebsiteForm key="website-form-website" data={data} handleChange={handleChange} />
        ],
        'software': [
            <UserNameEmailPol key="user-name-email-software" data={data} handleChange={handleChange} handleTypeChange={handleTypeChange} />,
            <WebsiteForm key="website-form-website" data={data} handleChange={handleChange} />
        ],
        'application': [
            <UserNameEmailPol key="user-name-email-application" data={data} handleChange={handleChange} handleTypeChange={handleTypeChange} />,
            <WebsiteForm key="website-form-website" data={data} handleChange={handleChange} />
        ],
    }

    const renderForm = () => {
        // Jeśli selectedWebsiteType nie został jeszcze ustawiony, wyświetl komunikat
        if (!selectedWebsiteType) {
            return <p>Proszę wybrać typ strony.</p>;
        }

        // Jeśli typ strony został wybrany, renderuj odpowiadające mu komponenty
        return formElements[selectedWebsiteType][activeTab];
    }

    return (
        <div className='activeTab'>
            <div>
                {
                    // Wyświetlanie komponentów na podstawie wybranego typu strony
                    // Jeśli selectedWebsiteType nie jest jeszcze ustawiony, domyślnie używany będzie 'portfolio'
                    formElements[selectedWebsiteType]?.[activeTab]
                }
            </div>
            <div className='mainFormButton'>
                {activeTab > 0 && (
                    <button
                        onClick={() => setActiveTab(prev => prev - 1)}
                        className='Back'>
                        Cofnij
                    </button>
                )}
                {activeTab < (formElements[selectedWebsiteType]?.length - 1 || 0) && (
                    <button
                        onClick={() => setActiveTab(prev => prev + 1)}
                        className='btnNext'>
                        Dalej
                    </button>
                )}  
                {
                    activeTab === (formElements[selectedWebsiteType]?.length - 1 || 0) ? <button onClick={sendTestEmail}>Wyślij</button> : null
                }
            </div>
        </div>
    );
}

export default MainFormPol