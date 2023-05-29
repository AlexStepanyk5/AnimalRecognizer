import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Blog from "../../components/Home/Blog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <Blog />
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
    </div>
  );
};

export default BlogPage;
