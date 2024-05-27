import './style.scss';
import ImageUpload from './ImageUpload.js'


const HowToUse = () => {


    return (
        <div className='usage-container'>
            <div className='usage-content'>
                <div className='image-upload-container'>
                    <div>
                        <ImageUpload />
                    </div>

                    <div className='image-upload-text'>
                        <h3>Як це працює?</h3>
                        <p>Просто завантажте фото тваринки <br />і наш вебсайт допоможе вам розпізнати та заповнити<br />його риси для фільтрування доступних анкет</p>
                    </div>
                </div>

                <div className='contact-container'>
                    <div className='contact-content'>
                        <div className='contact-text'>
                            <h1 id='slackey'>Давайте домовимось про дзвінок та все обговоримо!</h1>
                            <div className='check-block'>
                                <img src='./images/Home/checkmark.png' alt="Check Box" />
                                <p className='check-text'>Кооперація із іншими організаціями</p>
                                <img src='./images/Home/checkmark.png' alt="Check Box" />
                                <p className='check-text'>Допомога із вашими запитаннями</p>
                            </div>
                            <p className='main-text'>Якщо ви хочете отримати більше інформації про наш сервіс,
                                 замовити дзвінок для обговорення співпраці або у вас виникла екстрена ситуація -
                                 Будь ласка, зв’яжіться з нами без вагань – ми завжди раді Вам допомогти!
                            </p>

                            <div className='contact-buttons'>
                                <a href="mailto:support@petcare.com?subject=Let`s schedule a call about cooperation" className='contact-button'>Подзвоніть мені</a>

                                <a href="tel:+380252525250" className='emergency-button'><img src='./images/Home/phone.png' alt="Emergency call" />Терміновий дзвінок</a>
                            </div>
                        </div>
                        <div className='contact-photo'>
                            <img src='./images/Home/vet_group.png' alt="Vet" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default HowToUse;