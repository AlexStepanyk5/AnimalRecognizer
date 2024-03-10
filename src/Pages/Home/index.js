import './style.scss';
import FindPet from '../../components/Home/FindPet';
import HowToUse from '../../components/Home/HowToUse';
import OurPets from '../../components/Home/OurPets';
import Facilities from '../../components/Home/Facilities';
import Blog from '../../components/Home/Blog';


const Home = () => {
    return (
        <div className='home-page'>
            <FindPet />
            <HowToUse />
            <div className="our-pets-header">
                <div className="pets-header-title">
                    <img src="./images/Home/paw.png" alt='paw'/>
                    <h1>Наші тваринки</h1>
                </div>
                <p>Наші тваринки вже чекають на тебе!<br />Обери ту, що тобі підходить!</p>
            </div>
            <div className='bottom-container'>
                <OurPets type='Any' color='Any' sterilized = 'false' passport = 'false' />
            </div>
            <Facilities />
            <Blog />
        </div>
    )
}

export default Home;