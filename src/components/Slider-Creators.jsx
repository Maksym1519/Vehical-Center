import '../style.scss';
import Sl from './slider-creators.module.scss';
import React from 'react';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/swiper-bundle.css'; 


import { SliderCard } from './Slider-Card';
import Img1 from '../images/slider-img1.jpg';
import Img2 from '../images/slider-img2.jpg';
import Img3 from '../images/slider-img3.jpg';
import Img4 from '../images/slider-img4.jpg';
import Img5 from '../images/slider-img5.jpg';
import Img6 from '../images/slider-img6.jpg';
import Img7 from '../images/slider-img7.jpg';


export const SliderCreators = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperEl = document.querySelector("swiper-container");
      const swiperContainer = swiperRef.current;
      const params = {
       scrollbar: true,
       injectStyles: [
          `
          .swiper-scrollbar-drag {
            min-width: 400px;
            height: 5px;
            background: rgba(255, 255, 255, 0.5);
          }
          .swiper-scrollbar-horizontal {
            background: transparent;
            z-index: -5;
            margin-left: -15px;
           }
          
        `,
          ],
      };
  
       Object.assign(swiperContainer, params);
      swiperContainer.initialize();
     }, []);
  
     const sliderImgs = [Img1,Img2,Img3,Img4,Img5,Img6,Img7]
    return (
        <div className={Sl.wrapper}>
         <h2 className={Sl.title}>Featured creators</h2>
         <div className={Sl.container}>
            <swiper-container 
            ref={swiperRef} 
            init="false"
            slides-per-view="4"
            className={Sl.swiperContainer}
            >
            {sliderImgs.map((images,index) => (
          <SwiperSlide className={Sl.slide}>     
         <SliderCard  key={index} img={images} />
         </SwiperSlide> 
         ))}
         </swiper-container>
         </div>
        </div>
    )
}