import './style.scss';
import OurTeam from '../../components/Home/OurTeam';
const About = () => {
    return (
        <div>
            <div className='about-container'>
                <div className="about-header-container">
                    <div className='about-header'>
                        <img alt='paw' src="./images/Home/paw.png" />
                        <h1>About Us</h1>
                    </div>
                    <p>Our big-picture hope is for every pet in the world to be safe, respected and loved - whether the pet is owned, surrendered to a shelter, unclaimed at the pound, seized by authorities, or trapped by rangers.</p>
                </div>

                <div className='about-blocks-container'>
                    <div className='block-container'>
                        <img alt='about-us-img' src="./images/about-us/about-us-image-1.png" />
                        <div className='block-text'>
                            <h2>Create a positive and progressive culture for rescue.</h2>
                            <p>We want to improve the rescue and adoption experience for everyone and believe that the best way to achieve this is by creating and nurturing a positive and progressive culture for rescue.</p>
                        </div>
                    </div>
                    <div className='block-container' id='reverse'>
                        <img alt='about-us-img' src="./images/about-us/about-us-image-2.png" />
                        <div className='block-text'>
                            <h2>Use technology to drive social change.</h2>
                            <p>We are digital innovators, always looking for ways we can leverage the latest advances in the tech world to solve the big issues and challenges that rescue pets face in the world.</p>
                        </div>
                    </div>
                    <div className='block-container'>
                        <img alt='about-us-img' src="./images/about-us/about-us-image-3.png" />
                        <div className='block-text'>
                            <h2>Unite to save lives.</h2>
                            <p>We unite pets with new families, rescue groups with adopters and foster carers, corporate partners with a national rescue community, and we unite all passionate advocates for rescue pets to drive positive change.</p>
                        </div>
                    </div>

                </div>

            </div>
            <OurTeam currentPage="about" />
        </div>
    );
}

export default About;