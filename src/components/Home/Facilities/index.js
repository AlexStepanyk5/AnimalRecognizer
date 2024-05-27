import './style.scss';

const Facilities = () => {
    return (
        <div className='facilities-container'>
            <div className='facilities-content'>
                <div className='facilities'>
                    <div className='facilities-main'>Наші послуги</div>
                    <div className='facilities-text'>Наш вебсайт може бути корисний для людей із різними потребами. Ми покриваємо усі необхідні базові послуги та маємо багато всього корисного на додачу, що точно покращить ваш досвід користування і допоможе усім тваринкам знайти нових власників якомога швидше!</div>
                </div>
                <div className='wrapper'>
                    <ul className='column'>
                    <li>Публікація анкет тварин на нашому вебсайті</li>
                         <h3>Незалежно від того, чи ви окрема особа, чи представник притулку - ви завжди можете опублікувати анкету своєї тварини на нашому сайті.</h3>
                         <li>Розпізнавання рис тварин</li>
                         <h3>Ми додали справді дивовижний інструмент, який може розпізнавати основні риси вашої тварини лише за фотографією, щоб полегшити вам створення анкети!</h3>
                         <li>Підбір ідеального улюбленця</li>
                         <h3>Ми додали багато різних фільтрів і категорій, щоб допомогти вам знайти найкращу домашню тварину для себе.</h3>
                     </ul>
                     <ul className='column'>
                         <li>Повна підтримка для будь-якого користувача</li>
                         <h3>Ми раді особисто підтримати кожного нашого користувача з будь-якими питаннями, які виникнуть на усіх етапах використання!</h3>
                         <li>Співпраця з обома сторонами</li>
                         <h3>Наш вебсайт може бути корисним для обох сторін - людей, які хочуть знайти домашнього улюбленця для себе і для людей, які хочуть знайти нову сім'ю для свого улюбленця.</h3><li>Тренінги та посібники з догляду</li>
                         <h3>Ми створили величезну базу знань із корисними посібниками та статтями про тварин і догляд за ними, які допоможуть вам.</h3>
                         
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Facilities;