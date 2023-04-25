import React from "react";
import "./style.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
            <div className="meow">
                <div>
                <h3 className="slackey">Meow</h3>
                <h2 className="meow-text">
                Our vision is a world free from animal cruelty: together we can move the world for animals. Global Animal Welfare. Better Life For Animals.
                </h2>
                </div>
                <div className="social-media">
                    <img src="./images/facebook.svg"></img>
                    <img src="./images/twitter.svg"></img>
                    <img src="./images/linkedin.svg"></img>
                    <img src="./images/instagram.svg"></img>
                   
                </div>
                
            </div>
            <div className="other">
                <div >
                    <h3 className="slackey">Useful links</h3>
                    <ul className="main-font">
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        
                    </ul>
                </div>
                <div >
                    <h3 className="slackey">Explore</h3>
                    <ul className="main-font">
                        <li>About us</li>
                        <li>Our Team</li>
                        <li>Adopt Pet</li>
                    </ul>
                </div>
                <div>
                    <h3 className="slackey">Contact info</h3>
                    <ul className="main-font">
                        <li>+380676535231</li>
                        <li>Ternopil, Mykulynetska street, 46a</li>
                    </ul>
                </div>
            </div> 
        </div>
        <hr></hr>
        <h2 className="copyright">Copyright 2023</h2>
        </div>
    );
    }

export default Footer;