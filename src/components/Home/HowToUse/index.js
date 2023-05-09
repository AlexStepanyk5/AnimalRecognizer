import react from 'react';

import './style.scss';


const HowToUse = () => {
    



    return (
        <div className='usage-container'>
            <div className='usage-content'>
                <div className='image-upload-container'>
                    <div className='image-upload-button'>
                        <img src='./images/Home/upload.png'/>
                        <h4>Download image</h4>
                    </div>
                   
                    <div className='image-upload-text'>
                        <h3>How To use?</h3>
                        <p>Just download an image of a desirable<br/>pet and our AI will try to look for a <br/>similar one for you</p>
                    </div>
                </div>

                <div className='contact-container'>
                    <div className='contact-content'>
                        <div className='contact-text'>
                        <h1 id='slackey'>Lets book a call and stay connected</h1>
                                <div className='check-block'>
                                    <img src='./images/Home/check-box.png'/>
                                    <p className='check-text'>Cooperation with companies</p>
                                    <img src='./images/Home/check-box.png'/>
                                    <p className='check-text'>Support with any questions</p>
                                </div>
                                <p className='main-text'>If you want to get more information about our service, 
                                     book a call to discuss cooperation or you have any emergency situation -
                                     please, be free to reach us with no hesitation - we are always glad to help you!
                                </p>
                            
                            <div className='contact-buttons'>
                                <button className='contact-button'>Book a call</button>  
                                <div className='emergency-button'><img src='./images/Home/phone.png'/>Emergency call</div>
                            </div>
                        </div>
                        <div className='contact-photo'>
                            <img src='./images/Home/vet_group.png'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
    }

    export default HowToUse;