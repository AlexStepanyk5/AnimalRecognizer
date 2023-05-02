import react from 'react';
import './style.scss';
import FindPet from '../../components/Home/FindPet';
import HowToUse from '../../components/Home/HowToUse';

const Home = () => {
    return (
        <div>
            <FindPet/>  
            <HowToUse/>
            <div className='our-pets'></div>
            <div className='facilities-we-provide'></div>
            <div className='our-team'></div>
            <div className='blog'></div>
        </div>
    )
    }

    export default Home;