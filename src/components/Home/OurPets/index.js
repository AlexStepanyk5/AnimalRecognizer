import React from 'react';
import './style.scss';

const OurPets = () => {
    return (
        <div className="pets-container">
            <div className="our-pets-header">
                <div className="pets-header-title">
                    <img src="./images/Home/paw.png"/>
                    <h1>Our Pets</h1>
                </div>
                <p>Best pets are waiting for adoption! <br/>Find the one you will love the most with our tools.</p>
            </div>

            <div className="pets-block">
                <div className='cats-block'>
                    <div className="pets-block-title">
                        <img src="./images/Home/paw.png"/>
                        <h1>Cats</h1>
                    </div>
                    <div className="cards-container">
                        <div className='card'>
                            <img src="./images/cats/cat_1.jpg"/>
                            <h4 className='pet-name'>Lary</h4>
                            <p className='shelter-name'>Shelter “Happy Paw”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/cats/cat_2.jpg"/>
                            <h4 className='pet-name'>Angel</h4>
                            <p className='shelter-name'>Shelter “Animal World”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/cats/cat_3.jpg"/>
                            <h4 className='pet-name'>Puck</h4>
                            <p className='shelter-name'>Shelter “Kitty Cat”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/cats/cat_4.jpg"/>
                            <h4 className='pet-name'>Gogo</h4>
                            <p className='shelter-name'>Shelter “Whiskas”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        
                    </div>
                </div>  

                <div className='dogs-block'>
                    <div className="pets-block-title">
                        <img src="./images/Home/paw.png"/>
                        <h1>Dogs</h1>
                    </div>
                    <div className="cards-container">
                        <div className='card'>
                            <img src="./images/dogs/dog_1.jpg"/>
                            <h4 className='pet-name'>Jack</h4>
                            <p className='shelter-name'>Shelter “Happy Paw”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/dogs/dog_2.jpg"/>
                            <h4 className='pet-name'>Rex</h4>
                            <p className='shelter-name'>Shelter “Hot-Dog”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/dogs/dog_3.jpg"/>
                            <h4 className='pet-name'>Pes</h4>
                            <p className='shelter-name'>Shelter “Happy Paw”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/dogs/dog_4.jpg"/>
                            <h4 className='pet-name'>Ben</h4>
                            <p className='shelter-name'>Shelter “Hot-Dog”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        
                    </div>
                </div>    
            </div>

        </div>
    );
}

export default OurPets;