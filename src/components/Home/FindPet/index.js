import react from 'react';
import './style.scss';

const FindPet = () => {
    return (
        <div className='find-pet-container'>

            <div className='find-pet-content'>
            
                <div className='find-pet-block'>
                    <div className='find-pet-images'>
                        <img className='star' src="./images/Home/Star.png"></img>
                        <img className='circles' src="./images/Home/circles.png"></img>
                        <img className='paw' src="./images/Home/paw.png"></img>
                        <img className="cat-main" src="./images/Home/cat-main.png"></img>
                        <img className="dog-main" src="./images/Home/dog-main.png"></img>
                    </div>
                    <div className="find-pet-text">

                        <h1 className='slackey find-pet-title'>
                            Find a pet by our tools
                            <img src="./images/Home/emoji.png"></img>
                        </h1>
                        <p className='main-text find-pet-description'>Best pets are waiting for adoption. Find out the the perfect one you will like it.</p>
                        <button className='find-text-button'>Find a pet</button>
                        
                    </div>
                    
                </div>
                <hr></hr>


            </div>

            
        </div>

    )
    }

    export default FindPet;