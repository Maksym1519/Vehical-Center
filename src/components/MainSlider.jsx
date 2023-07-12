import "../style.scss";
import Ms from "./mainSlider.module.scss";
import Gallery1 from "../images/vhf-pic1.jpg";
import Gallery2 from "../images/vhf-pic2.jpg";
import Gallery3 from "../images/vhf-pic3.jpg";
import Gallery4 from "../images/vhf-pic4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { EffectCreative } from "swiper";
import SwiperCore, { Pagination } from "swiper";
import React, { useRef, useState } from 'react';
import { useEffect } from "react";
import { register } from "swiper/element/bundle";


import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import 'swiper/scss/effect-cards';
import 'swiper/css/effect-creative';
import "swiper/swiper-bundle.css";

//SwiperCore.use([Pagination]);

//---------------------------------------------------------------------------------
export const MainSlider = () => {
  register();
  // const swiperRef = useRef(null);
    //const swiperContainer = swiperRef.current;
    const params = {
    injectStyles: [
        `
          .swiper-pagination-bullet {
           width: 95px;
             height: 5px;
           background: rgba(255, 255, 255, 0.5);
          inactive-opacity: 1;
          border-radius: 0;
         }
       .swiper-wrapper {
       // max-width: 800px !important;
           //display: flex;
         //justify-content: flex-start;
          //  align-items: center;
           //margin-top: 40px;
           //height: 150%;
          }
                   
          .swiper-pagination-bullets.swiper-pagination-horizontal {
            position: absolute;
            bottom: -30px !important;
            left: 0;  
            display: flex;
            justify-content: flex-start;
          }
          .swiper-pagination-bullet.swiper-pagination-bullet-active {
            margin-left: 0 !important;
          }
            swiper-container {
            margin-left: 0 !important;
            margin-top: 0 !important;
            display-flex !important;
            align-items: center !important:
           // justify-content: flex-start;
            max-width: 100% !important;
            max-height: 100%;
            box-sizing: border-box;
          }
         
           .swiper-slide-active {
            z-index: 1233 !important;
          }
            swiper-slide {
           // position: absolute;
           // left: 100px;
            //justify-self: flex-start;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            //transform: translate3d(-34%) !important;
             width: 519px !important;
              }
              swiper-slide:nth-child(2n) {
                margin-top: 20px !important;
                margin-left: 350px !important;
                z-index: 3 !important;
                 }
              swiper-slide:nth-child(3n) {
                margin-top: 55px;
                margin-left: 550px !important;
                z-index: 2 !important;
              }
              swiper-slide:nth-child(4n) {
                margin-top: 93px !important;
                margin-left: 950px !important;
                z-index: 1 !important;
              }
           
           
         
      `,
       ],
    };
 
    const authorSwiper = useRef("none");

    useEffect(() => {
      Object.assign(authorSwiper.current, params);
      authorSwiper.current.initialize();
    }, []);
  

   const sliderImgs = [Gallery1, Gallery2, Gallery3, Gallery4];

  return (
    
    <div className={Ms.slider__body}>
        <swiper-container
         init="false"
         ref={authorSwiper}
         slides-per-view="1"
         effect="cards"
         grab-cursor="true"
         centeredSlides="true"
         loop="true"
         cards-effect-rotate="false"
         cards-effect-per-slide-offset="25"
         cards-effect-slide-shadows="false"
         pagination="true"
         className="mySwiper"
         //modules={EffectCards}
            >

          <swiper-slide className={Ms.slide1}>
            <img src={Gallery1} alt={`Slide`} />
          </swiper-slide>
          <swiper-slide className={Ms.slide2}>
            <img src={Gallery2} alt={`Slide`} />
          </swiper-slide>
          <swiper-slide className={Ms.slide3}>
            <img src={Gallery3} alt={`Slide`} />
          </swiper-slide>
          <swiper-slide className={Ms.slide4}>
            <img src={Gallery4} alt={`Slide`} />
          </swiper-slide>
        </swiper-container> 
       </div>
  );
};
