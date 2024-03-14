import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from '../CarouselCard/CarouselCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle'
import 'swiper/css/navigation';

import './SwiperCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Testimonial_data } from '../../constants/testimonial.constants';

export default function SwiperCarousel() {
  return (
    <div className='swiperJsMainClass' id='Testimonial'>
      <Swiper
        breakpoints={{
            620: {
              // width: 576,
              slidesPerView: 1,
            },
            1000: {
              // width: 768,
              slidesPerView: 2,
            },
          }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 200,
        }} 
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide className='SwiperGrid'>   <CarouselCard text={Testimonial_data[0].text}/>   </SwiperSlide>
        <SwiperSlide className='SwiperGrid'>   <CarouselCard text={Testimonial_data[1].text}/>   </SwiperSlide> */}
        {console.log(Testimonial_data)}
        {Testimonial_data?.map(ele => (
                <SwiperSlide className='SwiperGrid' ><CarouselCard key={ele.ke} {...ele} /></SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}
