import react from 'react';
import './style.scss';

const Facilities = () => {
    return (
        <div className='facilities-container'>
            <div className='facilities-content'>
            <div className='facilities'>
                <div className='facilities-main'>Facilities we provide</div>
                <div className='facilities-text'>Our websitie is useful for lots of people with different needs. We`ve covered all basic requirements for such a sphere and added a lot of<br/> useful features, which will improve your experience, make it easier and help pets and their owners.</div>
            </div>
                <div className='wrapper'>
                <ul className='column'>
                    <li>Posting animals on our website</li>
                    <h3>No matter either you are an individual or the third party - you always can post your animal`s CV on our website.</h3>
                    <li>Recognizing animal`s features</li>
                    <h3>We`ve added really amazing tool, which can recognize main features of your animal just from the photo to make CV creation easier for you!</h3>
                    <li>Finding perfect pet for you</li>
                    <h3>We`ve added a lot of different filters and categories in order to help you with finding the best pet for you.</h3>
                </ul>
                <ul className='column'>
                    <li>All the way support for any user</li>
                    <h3>We are glad to personally support each of our users with any questions, which will appear on any stage of usage!</h3>
                    <li>Trainings and guides about care</li>
                    <h3>We`ve created a huge knowledge base with useful guides and articles about animals and care for them to help you.</h3>
                    <li>Cooperation with both parties</li>
                    <h3>Our website may be useful for both sides - people, who want to find a pet for themselves and for people, who want to find new family for their pet.</h3>
                </ul>
                </div>
            </div>
        </div>

    )
    }

    export default Facilities;