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
    width: 1200,
    bgcolor: '#FFE4C8',
    borderRadius: '24px',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};


const Footer = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openn, setOpenn] = React.useState(false);
    const handlleOpen = () => setOpenn(true);
    const handlleClose = () => setOpenn(false);

    const [oppen, setOppen] = React.useState(false);
    const handleOppen = () => setOppen(true);
    const handleClosse = () => setOppen(false);
    const publicURL = process.env.PUBLIC_URL;


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
                        <a target='blank' href='https://www.facebook.com/fcit.tneu.edu.ua'><img alt="facebook-img" src={`${publicURL}/images/facebook.svg`} /></a>
                        <a target='blank' href='https://twitter.com/ZUNUniversity'><img alt="twitter-img" src={`${publicURL}/images/twitter.svg`} /></a>
                        <a target='blank' href='https://www.linkedin.com/company/wunu/'><img alt="linkedin-img" src={`${publicURL}/images/linkedin.svg`} /></a>
                        <a target='blank' href='https://www.instagram.com/fcit.zunu/'><img alt="instagram-img" src={`${publicURL}/images/instagram.svg`} /></a>
                    </div>

                </div>
                <div className="other">
                    <div >

                        <h3 className="slackey">Useful links</h3>
                        <ul className="main-font">
                            <ul>
                                <li onClick={handleOppen}>FAQs</li>
                                <Modal
                                    open={oppen}
                                    onClose={handleClosse}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Frequently Asked Questions
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2, }}>
                                            <ul>
                                                <li>Q: How does the pet adoption process work on this website?<br />
                                                    A: To adopt a pet, browse the available listings and find a pet that suits your preferences. Contact the pet owner or shelter through the provided contact information to inquire about the pet, ask questions, and arrange a meeting. If both parties are satisfied, you can proceed with the adoption process.
                                                    <br /><br />
                                                    Q: Can I post my pet for adoption on this website?<br />
                                                    A: Absolutely! We encourage users to post their pets for adoption. Simply create an account, provide necessary details about your pet, including their description, photos, and any other relevant information. Interested individuals can then contact you directly through the website.
                                                    <br /><br />
                                                    Q: How do I contact the pet owner or shelter to inquire about a pet?<br />
                                                    A: Each pet listing includes contact information, such as email or phone number. Simply reach out to the pet owner or shelter using the provided contact details to ask questions, discuss the pet's requirements, and express your interest in adoption.
                                                    <br /><br />
                                                    Q: Are the pets on this website from shelters or individual owners?<br />
                                                    A: We collaborate with both individual pet owners and shelters. Some pets are posted by individuals who can no longer care for their pets, while others are from reputable animal shelters. Each listing will clearly indicate whether it's from a shelter or an individual.
                                                    <br /><br />
                                                    Q: What if I encounter any issues during the adoption process?<br />
                                                    A: If you face any issues or concerns during the adoption process, please contact our customer support team. We are here to assist you and ensure a smooth adoption experience.
                                                    <br /><br />
                                                    Q: How can I support shelters through this website?<br />
                                                    A: Our website provides opportunities for users to donate directly to partnering shelters. Additionally, you can choose to adopt pets from these shelters, which helps create space for more animals in need. By spreading the word about our website and promoting responsible pet ownership, you can also contribute to the welfare of animals in shelters.
                                                    <br /><br />
                                                    If you have any further questions or need assistance, please feel free to contact our customer support team.</li><br />
                                            </ul>
                                        </Typography>
                                        <Button sx={{
                                            margin: '0 auto',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#FF5B2E',
                                            transition: 'all 0.3s ease 0s',
                                            '&:hover': {
                                                backgroundColor: '#FD3600',
                                                boxShadow: '0px 8px 8px #723d00',
                                                transform: 'translateY(-5px)',
                                            }
                                        }} variant="contained" onClick={handleClosse}>Close</Button>
                                    </Box>
                                </Modal>
                            </ul>
                            <ul>
                                <li onClick={handlleOpen}>Privacy Policy</li>
                                <Modal
                                    open={openn}
                                    onClose={handlleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Privacy Policy
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2, }}>
                                            <ul>
                                                <li>Effective Date: 20.05.2023</li><br />
                                                <li>
                                                    This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website. We are committed to safeguarding your privacy and ensuring the security of your personal information. By using our website, you consent to the practices outlined in this Privacy Policy.
                                                    <br />
                                                    1. Information We Collect:
                                                    We may collect personal information such as your name, email address, contact information, and any other information you voluntarily provide to us through forms or interactions on our website.
                                                    <br />
                                                    2. Use of Information:
                                                    We use the collected information to provide you with the requested services, respond to your inquiries, improve our website, and communicate with you about updates, promotions, or other relevant information. We may also use your information for statistical analysis and to enhance the user experience.
                                                    <br />
                                                    3. Disclosure of Information:
                                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                                                    - We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, as long as they agree to keep the information confidential.
                                                    - We may disclose your information if required by law or in response to a valid legal request, such as a court order or government inquiry.
                                                    - In the event of a merger, acquisition, or sale of our business assets, your information may be transferred to the acquiring entity.
                                                    <br />
                                                    4. Cookies and Tracking Technologies:
                                                    Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze trends, and gather demographic information. You can manage your cookie preferences through your browser settings.
                                                    <br />
                                                    5. Data Security:
                                                    We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
                                                    <br />
                                                    6. Third-Party Links:
                                                    Our website may contain links to third-party websites that are not under our control. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of those websites before providing any personal information.
                                                    <br />
                                                    7. Changes to this Privacy Policy:
                                                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.
                                                    <br />
                                                    8. Contact Us:
                                                    If you have any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us at +380676535231.
                                                    <br /><br />
                                                        By using our website, you acknowledge that you have read, understood, and agreed to the terms and conditions of this Privacy Policy.</li><br />
                                            </ul>
                                        </Typography>
                                        <Button sx={{
                                            margin: '0 auto',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#FF5B2E',
                                            transition: 'all 0.3s ease 0s',
                                            '&:hover': {
                                                backgroundColor: '#FD3600',
                                                boxShadow: '0px 8px 8px #723d00',
                                                transform: 'translateY(-5px)',
                                            }
                                        }} variant="contained" onClick={handlleClose}>Close</Button>
                                    </Box>
                                </Modal>
                            </ul>
                            <ul>
                                <li onClick={handleOpen}>Terms of Use</li>
                                <Modal
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
                                            <ul>
                                                <li>1. These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website URL.</li><br />
                                                <li>2. By using our Website, you accepted these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our Website.</li><br />
                                                <li>3. Intellectual Property Rights Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</li><br />
                                                <li>4. License to use website You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</li><br />
                                            </ul>
                                        </Typography>
                                        <Button sx={{
                                            margin: '0 auto',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#FF5B2E',
                                            transition: 'all 0.3s ease 0s',
                                            '&:hover': {
                                                backgroundColor: '#FD3600',
                                                boxShadow: '0px 8px 8px #723d00',
                                                transform: 'translateY(-5px)',
                                            }
                                        }} variant="contained" onClick={handleClose}>Close</Button>
                                    </Box>
                                </Modal>
                            </ul>

                        </ul>
                    </div>
                    <div >
                        <h3 className="slackey">Explore</h3>
                        <ul className="main-font">
                            <a href='/about'>About us</a>
                            <a href='/our-pets'>Our Pets</a>
                            <a href='/blog'>Blog</a>
                        </ul>
                    </div>
                    <div>
                        <h3 className="slackey">Contact info</h3>
                        <ul className="main-font">
                            <a href="tel:+380676535231 ">+380676535231</a>
                            <a href='https://goo.gl/maps/yqwMBbJ84u5jyTEt5' target='blank'>Ternopil, Mykulynetska street, 46a</a>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className="copyright">Copyright 2023</h2>
        </div>
    );
}

export default Footer;