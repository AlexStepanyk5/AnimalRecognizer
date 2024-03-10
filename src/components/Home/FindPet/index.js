import './style.scss';

const FindPet = () => {
    return (
        <div className='find-pet-container'>

            <div className='find-pet-content'>

                <div className='find-pet-block'>

                    <div className='find-pet-images'>
                        <img className='star' src="./images/Home/Star.png" alt='star'></img>
                        <img className='circles' src="./images/Home/circles.png" alt='circles'></img>
                        <img className='paw' src="./images/Home/paw.png" alt='paw'></img>
                        <img className="cat-main" src="./images/Home/cat-main.png" alt='cat'></img>
                        <img className="dog-main" src="./images/Home/dog-main.png" alt='dog'></img>
                    </div>
                    <div className="find-pet-text">

                        <h1 className='slackey find-pet-title'>
                            Знайди свого чотирилапого друга з нашою допомогою!
                            <img src="./images/Home/emoji.png" alt='emoji'></img>
                        </h1>
                        <p className='main-text find-pet-description'>Найкращі улюбленці вже чекають на тебе! Обери того, що підійде тобі найбільше!</p>
                        <a href='/our-pets' className='find-text-button'>Знайти тваринку</a>
                    </div>

                </div>
                
                <hr></hr>

            </div>

        </div>
    )
}

export default FindPet;