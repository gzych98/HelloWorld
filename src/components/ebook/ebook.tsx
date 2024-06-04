import './ebook.css'

const Ebook: React.FC = () => {
    return (
        <div className='page' id="ebook">
            <div className="p-content-container">
                <div className='ebook-main'>
                    <h1>Chciałbyś sam zrobić swoją stronę wizytówkę?</h1>
                    <h2>Pobierz nasz najnowszy e-book!</h2>
                    <a href='#'>
                        <button id='button-ebook'>Pobierz!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ebook