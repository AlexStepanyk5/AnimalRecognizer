import react from 'react';
import './style.scss';


const Header = () => {
    return (
        <div className='header-container'>
            <h1 className="heading">AnimalRecogniser</h1>
            <ul className='navbar-container'>
                <li>Home</li>
                <li>About us</li>
                <li>Our pets</li>
                <li>Blog</li>
            </ul>     
        </div>
    );
    }

export default Header;