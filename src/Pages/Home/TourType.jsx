// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
import { Pagination } from 'swiper/modules';

const TourType = () => {
    return (
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className=' rounded-full  w-20 h-28 bg-red-600 border-2 p-20'>
            Slide 1
            </div>
            </SwiperSlide>
          <SwiperSlide >
            <div className=' rounded-full  w-20 h-28 bg-red-600 border-2 p-20'>
            Slide 1
            </div>
            </SwiperSlide>
          <SwiperSlide >
            <div className=' rounded-full  w-20 h-28 bg-red-600 border-2 p-20'>
            Slide 1
            </div>
            </SwiperSlide>
          <SwiperSlide >
            <div className=' rounded-full  w-20 h-28 bg-red-600 border-2 p-20'>
            Slide 1
            </div>
            </SwiperSlide>
          
          
        </Swiper>
      </>
    );
};

export default TourType;