import React from 'react';
import '../style.scss';
import Sl from './slider-creators.module.scss';
//---------------------------------------------------------
 import { Swiper, SwiperSlide } from 'swiper/react';
 import SwiperCore, { Pagination } from 'swiper/core';
 SwiperCore.use([Pagination]);
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
//---------------------------------------------------------
import { SliderCard } from './Slider-Card';
import Img1 from '../images/slider-img1.jpg';
import Img2 from '../images/slider-img2.jpg';
import Img3 from '../images/slider-img3.jpg';
import Img4 from '../images/slider-img4.jpg';
import Img5 from '../images/slider-img5.jpg';
import Img6 from '../images/slider-img6.jpg';
import Img7 from '../images/slider-img7.jpg';

export const SliderCreators = () => {
     const sliderImgs = [Img1,Img2,Img3,Img4,Img5,Img6,Img7]
    return (
        <div className={Sl.wrapper}>
         <h2 className={Sl.title}>Featured creators</h2>
         <div className={Sl.container}>
            <Swiper  pagination={{ type: 'progressbar' }} className={Sl.mySlyder}>
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