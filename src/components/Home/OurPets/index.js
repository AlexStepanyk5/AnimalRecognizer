import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './style.scss';
import Pet from './Pet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";

const OurPets = ({type, color, sterilized, passport }) => {
    const publicURL = process.env.PUBLIC_URL;
    const [dogs, setDogs] = useState();
    const [cats, setCats] = useState();
    var responseFromGetCat;
    var responseFromGetDog;
    
    useEffect(() => {
        const getPet = async () => {
            try {
                if (color === "Any"){
                    responseFromGetDog = await axios.get(`https://localhost:7216/api/Pets/Dog/${sterilized}/${passport}`)
                    responseFromGetCat = await axios.get(`https://localhost:7216/api/Pets/Cat/${sterilized}/${passport}`)
                } 
                    else{
                    responseFromGetDog = await axios.get(`https://localhost:7216/api/Pets/Dog/${color}/${sterilized}/${passport}`)
                    responseFromGetCat = await axios.get(`https://localhost:7216/api/Pets/Cat/${color}/${sterilized}/${passport}`)
                }

                await setDogs(responseFromGetDog.data);
                await setCats(responseFromGetCat.data)
                
            } catch (error) {
                console.error(error);
            }
        }
        getPet();

    }, [ color, sterilized, passport, responseFromGetCat, responseFromGetDog])

    return (
        <div className="pets-container">
            <div className="pets-block">
                {(type === 'Cat' || type === 'Any' ) &&
                    <div className='cats-block'>
                        <div className="pets-block-title">
                            <img src={`${publicURL}/images/Home/paw.png`} alt='paw' />
                            <h1>Cats</h1>
                        </div>

                        <div className="cards-container">
                            <Swiper
                                slidesPerView={4}
                                slidesPerGroup={4}
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
                                        (cats.map((cat) => (
                                            <SwiperSlide >
                                                <Pet key={cat.id} pet={cat} />
                                            </SwiperSlide>
                                        )))
                                        : 'Did not receive data from DB'
                                }
                            </Swiper>
                        </div>

                    </div>
                }
                {(type === 'Dog' || type === 'Any') &&
                    <div className='dogs-block'>
                        <div className="pets-block-title">
                            <img src={`${publicURL}/images/Home/paw.png`} alt='paw' />
                            <h1>Dogs</h1>
                        </div>

                        <div className="cards-container">
                
                            <Swiper
                                slidesPerView={4}
                                slidesPerGroup={4}
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
                                        (dogs.map((dog) => (
                                            <SwiperSlide >
                                                <Pet key={dog.id} pet={dog} />
                                            </SwiperSlide>
                                        )))
                                        : 'Did not receive data from DB'
                                }
                            </Swiper>
                        </div>

                    </div>
                }

            </div>

        </div>

    );
}

export default OurPets;