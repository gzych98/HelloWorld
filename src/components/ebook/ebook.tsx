import './ebook.css'

const Ebook: React.FC = () => {
    return (
        <div className='page' id="ebook">
            <div className="p-content-container">
                <div className='ebook-main'>
                    <h1>Chciałbyś dowiedzieć się więcej?</h1>
                    <h2>Przeczytaj nasze poradniki!</h2>
                    <a href='/poradniki'>
                        <button id='button-ebook'>Sprawdź!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ebook