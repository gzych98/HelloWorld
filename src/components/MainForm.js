"use client";
import { useState, useEffect } from 'react'
import UserNameEmail from './UserNameEmail'
import Szablon from './szablon';
import WebsiteForm from './website_form';
import './form.css'
import Swal from 'sweetalert2';




const MainForm = () => {
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

    const handleSubmit = async () => {
        if(!isValidEmail(data.email)) {

            Swal.fire({
                title: 'Error',
                text: 'Invalid e-mail address',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                console.log('E-mail wysłany');
                console.log(data)   
                Swal.fire({
                    title: 'Thank you for your request',
                    text: 'Our team is reviewing your request and will get back to you shortly',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })     
                resetForm();
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Błąd wysłania maila',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        } catch (error) {
            console.log(data)   
            Swal.fire({
                title: 'Error',
                text: 'Wystąpił błąd',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

        
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
            <UserNameEmail key="user-name-email-website" data={data} handleChange={handleChange} handleTypeChange={handleTypeChange} />,
            <WebsiteForm key="website-form-website" data={data} handleChange={handleChange} />
        ],
        'software': [
            <UserNameEmail key="user-name-email-software" data={data} handleChange={handleChange} handleTypeChange={handleTypeChange} />,
            <WebsiteForm key="website-form-website" data={data} handleChange={handleChange} />
        ],
        'application': [
            <UserNameEmail key="user-name-email-application" data={data} handleChange={handleChange} handleTypeChange={handleTypeChange} />,
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
                        Back
                    </button>
                )}
                {activeTab < (formElements[selectedWebsiteType]?.length - 1 || 0) && (
                    <button
                        onClick={() => setActiveTab(prev => prev + 1)}
                        className='btnNext'>
                        Next
                    </button>
                )}  
                {
                    activeTab === (formElements[selectedWebsiteType]?.length - 1 || 0) ? <button className= "g-recpatcha" data-sitekey="6LftAT4pAAAAAPCVNchOKg3eifc47suFNMHI_Zon"  onClick={handleSubmit}>Submit</button> : null
                }
            </div>
        </div>
    );
}

export default MainForm