// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TourType = () => {
  const [pack, setPack] = useState([]);
  
  useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/package`)
          .then(response => response.json())
          .then(data => setPack(data));
  }, []);

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
          {pack.map(item => (
              
              <SwiperSlide key={item._id}>
            <Link to={`/typeDetails/${item._id}`}>
            <button>
            <div className='w-28 h-28  rounded-full '>
              <img src={item.images[0]} alt="" className=' ' />
           
            </div>
            <span className=' '> {item.tour_type}</span>
            </button>
            </Link>
            </SwiperSlide>
    ))}
          
          
          
          
        </Swiper>
      </>
    );
};

export default TourType;