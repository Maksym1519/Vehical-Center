import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cards";
import "swiper/css/effect-creative";
import "swiper/swiper-bundle.css";
import SliderImg from '../images/client-slider-bg.webp';

import Cs from './clientSlider.module.scss'

export const ClientSlider = () => {
  register();
  const params = {
    injectStyles: [
      `
           swiper-container {
            max-width: 100% !important;
             }
          .swiper-wrapper {
            max-width: 100% !important;
          }
          swiper-slide {
            max-width: 100% !important;
            margin-right: 20px !important;
             }
          .swiper-button-prev {
            width: 53px !important;
            height: 53px !important;
            border-radius: 50% !important;
            background: rgba(116, 129, 255, 1) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transform:translate(-20%, -12%) !important;
          }
          
          .swiper-button-next {
            width: 53px !important;
            height: 53px !important;
            border-radius: 50% !important;
            background: rgba(116, 129, 255, 1) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transform:translate(18%, -14%) !important;
          }
          .swiper-button-prev:after {
            color: rgba(255, 255, 255, 1) !important;
            font-size: 26px !important;
          }
          .swiper-button-next:after {
            color: rgba(255, 255, 255, 1) !important;
            font-size: 26px !important;
          }
          @media (max-width: 767px) {
            .swiper-button-prev {
              width: 35px !important;
              height: 35px !important;
              border-radius: 50% !important;
              background: rgba(116, 129, 255, 1) !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              transform:translate(-33%, -419%) !important;
            }
            .swiper-button-next {
              width: 35px !important;
              height: 35px !important;
              border-radius: 50% !important;
              background: rgba(116, 129, 255, 1) !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              transform:translate(29%, -424%) !important;
            }
            .swiper-button-prev:after {
              color: rgba(255, 255, 255, 1) !important;
              font-size: 18px !important;
            }
            .swiper-button-next:after {
              color: rgba(255, 255, 255, 1) !important;
              font-size: 18px !important;
            }
          }
             
          `,
    ],
  };

  const clientSwiper = useRef("none");

  useEffect(() => {
    Object.assign(clientSwiper.current, params);
    clientSwiper.current.initialize();
  }, []);

  return (
    <div className={Cs.client__slider}>
      <div className={Cs.client__slider__container}>
      <h3 className={Cs.slide__title}>What our client say about us!</h3>
        <swiper-container
          init="false"
          ref={clientSwiper}
          slides-per-view="1"
          speed="500"
          //loop="true"
          css-mode="true"
          navigation="true"
          class='clientSliderDesctop'
        >
          <swiper-slide>
          <div className={Cs.slide}>
           
           <div className={Cs.slide__body}>
            <div className={Cs.slide__imgWrapper}>
              <img src={SliderImg} alt="bg" />
            </div>
            <div className={Cs.slide__info}>
             <span className={Cs.slide__info__author}>Laura Chaisson</span>
             <p className={Cs.slide__info__text}>In irure et ipsum eiusmod adipisicing id elit cillum proident. 
             Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo 
             exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi 
             id esse.</p>
            </div>
           </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div className={Cs.slide}>
           
           <div className={Cs.slide__body}>
            <div className={Cs.slide__imgWrapper}>
              <img src={SliderImg} alt="bg" />
            </div>
            <div className={Cs.slide__info}>
             <span className={Cs.slide__info__author}>Laura Chaisson</span>
             <p className={Cs.slide__info__text}>In irure et ipsum eiusmod adipisicing id elit cillum proident. 
             Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo 
             exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi 
             id esse.</p>
            </div>
           </div>
          </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};
