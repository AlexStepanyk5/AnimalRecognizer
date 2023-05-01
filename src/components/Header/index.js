import react from 'react';
import './style.scss';


const Header = () => {
    return (
        <div className='header-container'>
            <h1 className="heading">Ancare</h1>
            <ul className='navbar-container'>
                <li>Our pets</li>
                <li>Blog</li>
                <li>About us</li>
            </ul>     
        </div>
    );
    }

export default Header;