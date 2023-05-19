import React from 'react';
import './style.scss';

const OurTeam = ({ currentPage }) => {
    return (
        <div className="our-team-container">
            <h2 className="our-team-title">Our Team</h2>
            <div class="wrapper">
                <div className="team-member-card">
                    <img className="member-image" src='./images/team/Anna.jpg'/>                   
                    <h3 className="team-member-name">Anna Melnyk</h3>
                    <p className="team-member-position">Veterinarian</p>
                    
                </div>
                <div className="team-member-card">
                    <img className="member-image" src='./images/team/Marichka.jpg'/>                   
                    <h3 className="team-member-name">Marichka Shcheglova</h3>
                    <p className="team-member-position">Care Taker</p>
                    
                </div>
                <div className="team-member-card">
                    <img className="member-image" src='./images/team/Andrii.jpg'/>                   
                    <h3 className="team-member-name">Andrii Politychka</h3>
                    <p className="team-member-position">Trainer</p>
                    
                </div>
                <div className="team-member-card">
                    <img className="member-image" src='./images/team/Alex.jpg'/>                   
                    <h3 className="team-member-name">Alex Stepanyk</h3>
                    <p className="team-member-position">Care Taker</p>
                    
                </div>
                <div className="team-member-card">
                    <img className="member-image" src='./images/team/Ralf.jpg'/>                   
                    <h3 className="team-member-name">Ralph</h3>
                    <p className="team-member-position">Creative Centre</p>
                    
                </div>
                <div className="team-member-card">
                    <img className="member-image" src='./images/team/Vasyl.jpg'/>                   
                    <h3 className="team-member-name">Vasyl Luchka</h3>
                    <p className="team-member-position">Trainer</p>
                    
                </div>
                
            </div>
            {currentPage === '' && <a href='/about'className='view-team-button'>View team</a>}
        </div>    
    );
    }

export default OurTeam;