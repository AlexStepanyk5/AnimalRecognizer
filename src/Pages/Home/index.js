import react from 'react';
import './style.scss';
import FindPet from '../../components/Home/FindPet';
import HowToUse from '../../components/Home/HowToUse';
import OurPets from '../../components/Home/OurPets';
import Facilities from '../../components/Home/Facilities';
import OurTeam from '../../components/Home/OurTeam';
import Blog from '../../components/Home/Blog';

const Home = () => {
    return (
        <div>
            <FindPet/>  
            <HowToUse/>
            <OurPets/>
            <Facilities/>
            <OurTeam/>
            <Blog/>
        </div>
    )
    }

    export default Home;