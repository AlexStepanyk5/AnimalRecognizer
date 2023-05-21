import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style.scss';
import Pet from './Pet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const OurPets = (type, color, sterilized, passport) => {

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
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                            >
                            {
                                cats !== undefined ? 
                                ( cats.map((cat) => (   
                                    <SwiperSlide key={cat.id}>      
                                        <Pet pet={cat}/>
                                    </SwiperSlide>
                                )))
                                : 'No cats'                         
                            }
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
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                        >
                            {
                            dogs !== undefined ? 
                                ( dogs.map((dog) => (     
                                <SwiperSlide key={dog.id}>    
                                    <Pet pet={dog}/>
                                </SwiperSlide>
                                )))
                                
                            : 'No dogs'
                            } 
                    </Swiper>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default OurPets;