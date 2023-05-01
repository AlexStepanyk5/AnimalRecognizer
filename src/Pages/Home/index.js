import react from 'react';
import './style.scss';
import FindPet from "../components/Home/FindPet"

const Home = () => {
    return (
        <div>
        <FindPet />
        <div className='how-to-use-block'></div>
        <div className='our-pets'></div>
        <div className='facilities-we-provide'></div>
        <div className='our-team'></div>
        <div className='blog'></div>
        </div>
    )
    }

    export default Home;