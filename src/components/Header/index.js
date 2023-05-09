import react from 'react';
import './style.scss';



const Header = () => {
    return (
        <div className='header-container'>
            <h1 ><a className="heading" href='/'>Ancare</a></h1>
            <ul className='navbar-container'>
                <li><a href='/our-pets'>Our pets</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/about'>About us</a></li>
            </ul>     
        </div>
    );
    }

export default Header;