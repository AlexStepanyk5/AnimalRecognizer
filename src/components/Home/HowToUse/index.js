import './style.scss';
import ImageUpload from './ImageUpload.js'


const HowToUse = () => {


    return (
        <div className='usage-container'>
            <div className='usage-content'>
                <div className='image-upload-container'>
                    <div>
                        <ImageUpload/>
                    </div>
                   
                    <div className='image-upload-text'>
                        <h3>How To use?</h3>
                        <p>Just upload the image of your animal<br/>and our AI will help you with detecting its <br/>features to find her a new owner or to find more similar animals for you</p>
                    </div>
                </div>

                <div className='contact-container'>
                    <div className='contact-content'>
                        <div className='contact-text'>
                        <h1 id='slackey'>Lets book a call and stay connected</h1>
                                <div className='check-block'>
                                    <img src='./images/Home/check-box.png' alt="Check Box"/>
                                    <p className='check-text'>Cooperation with companies</p>
                                    <img src='./images/Home/check-box.png' alt="Check Box"/>
                                    <p className='check-text'>Support with any questions</p>
                                </div>
                                <p className='main-text'>If you want to get more information about our service, 
                                     book a call to discuss cooperation or you have any emergency situation -
                                     please, be free to reach us with no hesitation - we are always glad to help you!
                                </p>
                            
                            <div className='contact-buttons'>
                                <a href="mailto:dazerotes@gmail.com?subject=Let`s schedule a call about cooperation" className='contact-button'>Book a call</a>
                              
                                <a href="tel:+380676535231 " className='emergency-button'><img src='./images/Home/phone.png' alt="Emergency call"/>Emergency call</a>
                            </div>
                        </div>
                        <div className='contact-photo'>
                            <img src='./images/Home/vet_group.png' alt="Vet"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
    }

    export default HowToUse;