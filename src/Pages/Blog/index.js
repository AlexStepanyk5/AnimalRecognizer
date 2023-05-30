import "./style.scss";
import "swiper/css";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import { Autoplay, Pagination, Navigation } from "swiper";
import Blog from "../../components/Home/Blog";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div id="adoption-stories" className="swiper-image-block">
              <h1>Adoption Stories</h1>
              <p>
                In this page, we provide a dedicated space for our blog on our
                pet adopting website. Our blog serves as a valuable resource for
                pet lovers, potential adopters, and current pet owners.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="tips-guides" className="swiper-image-block">
              <h1>Tips and Guides</h1>
              <p>
                We offer practical tips, guides, and step-by-step tutorials on
                various aspects of pet care. Whether it's introducing a new pet
                to your home, crate training, basic obedience, or dealing with
                common behavioral issues, our blog provides actionable advice to
                help pet owners navigate these situations successfully.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="expert-advice" className="swiper-image-block">
              <h1>Expert Advice</h1>
              <p>
                Our blog page features articles written by experienced pet
                professionals, veterinarians, trainers, and behaviorists. They
                provide expert advice on various topics, including pet behavior,
                training tips, nutrition, grooming, and overall pet well-being.
                We strive to provide reliable and up-to-date information to
                assist pet owners in providing the best care for their furry
                companions.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="stories">
        <h2>Adoption Stories</h2>
        <div className="story-block">
          <h2>Lily and Charlie</h2>
          <img alt="story-1" src="./images/blog/story-1.png" />
          <p>
            Once upon a time, in a bustling city filled with towering
            skyscrapers and busy streets, there was a humble animal shelter
            called "Paws of Hope." It was a place where wagging tails and
            hopeful eyes eagerly awaited their chance at a forever home. One
            fateful day, a young woman named Lily found herself drawn to the
            shelter's doors, her heart yearning for a furry companion to share
            her life's adventures. As she entered, she was greeted by a symphony
            of barks and meows, each one a plea for love and a place to belong.
            Amidst the chaos, a small, scruffy dog caught Lily's attention. His
            name was Charlie, a shy and timid soul who had endured hardships in
            his past. Lily could see the flicker of hope in his eyes, and she
            knew she had found her perfect match. Overcoming her initial
            reservations, Lily made the decision to adopt Charlie and give him
            the love and stability he had been longing for. With every wag of
            his tail and gentle nudge against her hand, Charlie silently thanked
            Lily for seeing past his rough exterior and recognizing the beauty
            within.
          </p>
        </div>
      </div>
      <div className="tips-guides">
        <h1>Tips and Guides</h1>
        <div className="tips">
          <img src="./images/blog/useful-cat.png" />
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide >
              <h1>
                Provide a balanced diet: Feed your pet high-quality pet food appropriate for their species, age, and health condition. Consult with a veterinarian to determine the right diet for your pet.
              </h1>
              <img src="images/blog/tip-1.png" />
            </SwiperSlide>
            <SwiperSlide >
              <h1>
                Regular exercise: Dogs, cats, and other pets need regular exercise to maintain their physical and mental well-being. Engage them in playtime, walks, or other activities that suit their energy levels and abilities.
              </h1>
              <img src="images/blog/exercise.png" />
            </SwiperSlide>
            <SwiperSlide >
              <h1>
                Grooming: Regular grooming is essential to keep your pet's coat, nails, and teeth in good condition. Brush their fur, trim their nails, and clean their teeth as recommended by your veterinarian.
              </h1>
              <img src="images/blog/grooming.png" />
            </SwiperSlide>
            <SwiperSlide >
              <h1>
                Regular veterinary check-ups: Schedule routine visits to the veterinarian for health check-ups and vaccinations. Regular examinations can help detect any potential health issues early and ensure your pet's well-being.
              </h1>
              <img src="images/blog/veterinary.png" />
            </SwiperSlide>
            <SwiperSlide >
              <h1>
                Socialization: Socialize your pet with other animals and people from an early age to help them develop positive behaviors and reduce anxiety or aggression.
              </h1>
              <img src="images/blog/socialization.png" />
            </SwiperSlide>
            <SwiperSlide >
              <h1>
                Safe environment: Create a safe environment for your pet by removing any hazardous substances or objects they could ingest. Keep electrical cords, toxic plants, chemicals, and small objects out of their reach.
              </h1>
              <img src="images/blog/save-environment.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
