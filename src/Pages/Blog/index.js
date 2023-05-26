import "./style.scss";
import React, { useRef, useState } from "react";
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
              <p>In this page, we provide a dedicated space for our blog on our pet adopting website. Our blog serves as a valuable resource for pet lovers, potential adopters, and current pet owners.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="tips-guides" className="swiper-image-block">
              <h1>Tips and Guides</h1>
              <p>We offer practical tips, guides, and step-by-step tutorials on various aspects of pet care. Whether it's introducing a new pet to your home, crate training, basic obedience, or dealing with common behavioral issues, our blog provides actionable advice to help pet owners navigate these situations successfully.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="expert-advice" className="swiper-image-block">
              <h1>Expert Advice</h1>
              <p>Our blog page features articles written by experienced pet professionals, veterinarians, trainers, and behaviorists. They provide expert advice on various topics, including pet behavior, training tips, nutrition, grooming, and overall pet well-being. We strive to provide reliable and up-to-date information to assist pet owners in providing the best care for their furry companions.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPage;
