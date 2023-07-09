import '../slider.css'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
//import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css'; 

import '../style.scss';
import Sl from './slider-creators.module.scss';
import { SliderCard } from './Slider-Card';
import Img1 from '../images/slider-img1.jpg';
import Img2 from '../images/slider-img2.jpg';
import Img3 from '../images/slider-img3.jpg';
import Img4 from '../images/slider-img4.jpg';
import Img5 from '../images/slider-img5.jpg';
import Img6 from '../images/slider-img6.jpg';
import Img7 from '../images/slider-img7.jpg';

//SwiperCore.use([Pagination]);

export const SliderCreators = () => {
     const sliderImgs = [Img1,Img2,Img3,Img4,Img5,Img6,Img7]
    return (
        <div className={Sl.wrapper}>
         <h2 className={Sl.title}>Featured creators</h2>
         <div className={Sl.container}>
            <Swiper  
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
            className={Sl.mySlider}>
            {sliderImgs.map((images,index) => (
          <SwiperSlide className={Sl.slide}>     
         <SliderCard  key={index} img={images} />
         </SwiperSlide> 
         ))}
         </Swiper>
         </div>
        </div>
    )
}