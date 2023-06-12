import './style.scss';
import FindPet from '../../components/Home/FindPet';
import HowToUse from '../../components/Home/HowToUse';
import OurPets from '../../components/Home/OurPets';
import Facilities from '../../components/Home/Facilities';
import OurTeam from '../../components/Home/OurTeam';
import Blog from '../../components/Home/Blog';


const Home = () => {
    return (
        <div className='home-page'>
            <FindPet />
            <HowToUse />
            <div className="our-pets-header">
                <div className="pets-header-title">
                    <img src="./images/Home/paw.png" alt='paw'/>
                    <h1>Our Pets</h1>
                </div>
                <p>Best pets are waiting for adoption! <br />Find the one you will love the most with our tools.</p>
            </div>
            <div className='bottom-container'>
                <OurPets type='Any' color='Any' sterilized = 'false' passport = 'false' />
            </div>
            <Facilities />
            <OurTeam currentPage='' />
            <Blog />
        </div>
    )
}

export default Home;