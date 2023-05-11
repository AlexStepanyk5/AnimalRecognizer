import React from "react";
import "./style.scss";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: '#FFE4C8',
    borderRadius:'24px',
    outline:'none',
    boxShadow: 24,
    p: 4,
  };
  

const Footer = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                        <img alt="facebook-img" src="./images/facebook.svg"></img>
                        <img alt="twitter-img" src="./images/twitter.svg"></img>
                        <img alt="linkedin-img" src="./images/linkedin.svg"></img>
                        <img alt="instagram-img" src="./images/instagram.svg"></img>

                    </div>

                </div>
                <div className="other">
                    <div >
                        <h3 className="slackey">Useful links</h3>
                        <ul className="main-font">
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>
                                <li onClick={handleOpen}>Terms of Use</li>
                                <Modal sx
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Terms & Conditions
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <ol>
                                            <li>1. These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website URL.</li><br/>
                                            <li>2. By using our Website, you accepted these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our Website.</li><br/>
                                            <li>3. Intellectual Property Rights Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</li><br/>
                                            <li>4. License to use website You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</li><br/>
                                        </ol>
                                    </Typography>
                                    <Button sx={{
                                        margin:'0 auto',
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        backgroundColor:'#FF5B2E',
                                        transition: 'all 0.3s ease 0s',
                                        '&:hover':{
                                            backgroundColor:'#FD3600',
                                            boxShadow: '0px 8px 8px #723d00',
                                            transform: 'translateY(-5px)',
                                        }
                                                }}variant="contained" onClick={handleClose}>Close</Button>
                                </Box>
                            </Modal>
                            </li>

                        </ul>
                    </div>
                    <div >
                        <h3 className="slackey">Explore</h3>
                        <ul className="main-font">
                            <li>About us</li>
                            <li>Our Pets</li>
                            <li>Blog</li>
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