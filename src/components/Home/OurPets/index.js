import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style.scss';
import Pet from './Pet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const OurPets = () => {

    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState();

    useEffect(() => {
        const getPet = async () => {
            try {
                const responseFromGetDog = await axios.get("https://localhost:7216/api/Pets/Dog")
                const responseFromGetCat = await axios.get("https://localhost:7216/api/Pets/Cat")

                await setDogs(responseFromGetDog.data);
                await setCats(responseFromGetCat.data)

            } catch (error) {
                console.error(error);
            }
        }
        getPet();

    }, [])

    return (
        <div className="pets-container">
            <div className="our-pets-header">
                <div className="pets-header-title">
                    <img src="./images/Home/paw.png" />
                    <h1>Our Pets</h1>
                </div>
                <p>Best pets are waiting for adoption! <br />Find the one you will love the most with our tools.</p>
            </div>

            <div className="pets-block">

                <div className='cats-block'>
                    <div className="pets-block-title">
                        <img src="./images/Home/paw.png" />
                        <h1>Cats</h1>
                    </div>
                    <div className="cards-container">
                        <Swiper
                            slidesPerView={4}
                            grid={{
                            rows: 2,
                            }}
                            spaceBetween={50}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                            >
                            <SwiperSlide>                            
                            {
                                cats !== undefined ? 
                                ( cats.map((cat) => (       
                                <Pet key={cat.id} pet={cat}/>
                                )))
                                : 'No cats'                         
                                }
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className='dogs-block'>
                    <div className="pets-block-title">
                        <img src="./images/Home/paw.png" />
                        <h1>Dogs</h1>
                    </div>
                    <div className="cards-container">
                    <Swiper
                        slidesPerView={4}
                        grid={{
                        rows: 2,
                        }}
                        spaceBetween={50}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                        >
                        <SwiperSlide>                            
                            {
                            dogs !== undefined ? 
                                ( dogs.map((dog) => (       
                                <Pet key={dog.id} pet={dog}/>
                                )))
                            : 'No dogs'
                            } 
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default OurPets;













{/* <div className='card'>
                            <img src="./images/cats/cat_1.jpg"/>
                            <h4 className='pet-name'>Lary</h4>
                            <p className='shelter-name'>Shelter “Happy Paw”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/cats/cat_2.jpg"/>
                            <h4 className='pet-name'>Angel</h4>
                            <p className='shelter-name'>Shelter “Animal World”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/cats/cat_3.jpg"/>
                            <h4 className='pet-name'>Puck</h4>
                            <p className='shelter-name'>Shelter “Kitty Cat”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/cats/cat_4.jpg"/>
                            <h4 className='pet-name'>Gogo</h4>
                            <p className='shelter-name'>Shelter “Whiskas”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                         */}




{/* <div className='card'>
                            <img src="./images/dogs/dog_2.jpg"/>
                            <h4 className='pet-name'>Rex</h4>
                            <p className='shelter-name'>Shelter “Hot-Dog”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/dogs/dog_3.jpg"/>
                            <h4 className='pet-name'>Pes</h4>
                            <p className='shelter-name'>Shelter “Happy Paw”,</p>
                            <p className='location'>Ternopil</p>
                        </div>
                        <div className='card'>
                            <img src="./images/dogs/dog_4.jpg"/>
                            <h4 className='pet-name'>Ben</h4>
                            <p className='shelter-name'>Shelter “Hot-Dog”,</p>
                            <p className='location'>Ternopil</p>
                        </div> */}

