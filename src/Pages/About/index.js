import './style.scss';
const About = () => {
    return (
        <div>
            <div className='about-container'>
                <div className="about-header-container">
                    <div className='about-header'>
                        <img alt='paw' src="./images/Home/paw.png" />
                        <h1>Про нас</h1>
                    </div>
                    </div>
                <div className='about-text'>
                    <p >Ми - благодійна організація PetCare, яка прагне згуртувати усіх навколо спільної проблеми. <br/> Усі тут сподіваються, що кожна домашня тваринка у світі буде в безпеці, огорнута повагою, теплом та любов’ю, незалежно від того, чи вона у власника, здана в притулок, загублена чи безхатня.</p>
                </div>


                <div className='about-blocks-container'>
                    <div className='block-container'>
                        <img alt='about-us-img' src="./images/about-us/about-us-image-1.png" />
                        <div className='block-text'>
                            <h2>Створюємо позитивну і прогресивну культуру для турботи про тварин</h2>
                            <p>Ми хочемо покращити досвід порятунку та адопції для всіх і вважаємо, що найкращий спосіб досягти цього — створити та плекати позитивну та прогресивну культуру порятунку.</p>
                        </div>
                    </div>
                    <div className='block-container' id='reverse'>
                        <img alt='about-us-img' src="./images/about-us/about-us-image-2.png" />
                        <div className='block-text'>
                            <h2>Використовуваємо технології, щоб просувати зміни</h2>
                            <p>Ми цифрові новатори, які завжди шукають способи використання останніх досягнень у світі технологій для вирішення великих проблем і викликів, з якими стикається світ порятунку тварин.</p>
                        </div>
                    </div>
                    <div className='block-container'>
                        <img alt='about-us-img' src="./images/about-us/about-us-image-3.png" />
                        <div className='block-text'>
                            <h2>Об'єднуємо, щоб рятувати життя</h2>
                            <p>Ми об’єднуємо домашніх тварин із новими сім’ями, групи волонтерів з новими потенційними власниками та тимчасовими опікунами, корпоративних партнерів із національною спільнотою порятунку та всіх прихильників порятунку домашніх тварин, щоб стимулювати позитивні зміни.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default About;