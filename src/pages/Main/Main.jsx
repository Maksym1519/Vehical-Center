//import React from 'react';
import { Header } from '../../components/Common/Header/Header';
import m from './main.module.scss';
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
import Car from '../../images/Nissan.webp';
import Honda from '../../images/Honda Accord-left.webp';
import Lexus from '../../images/Lexus-right.webp';
import StepIcon from '../../images/step-icon.svg';
import StepsImg1 from '../../images/steps-img1.webp';
import StepsImg2 from '../../images/steps-img2.webp';


export const Main = () => {
    register()
    const params = {
        injectStyles: [
          `
          swiper-container {
            max-width: 600px !important;
          }
          .swiper-wrapper {
            display: flex !important;
            align-items: center !important;
           
            }
          swiper-slide {
            display: flex !important;
            justify-content: center !important;
            margin-left: 50px !important;
            
          }
          .swiper-button-prev {
            width: 53px !important;
            height: 53px !important;
            border-radius: 50% !important;
            background: rgba(255, 255, 255, 1) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transform:translate(-20%, -12%) !important;
          }
          
          .swiper-button-next {
            width: 53px !important;
            height: 53px !important;
            border-radius: 50% !important;
            background: rgba(255, 255, 255, 1) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transform:translate(18%, -14%) !important;
          }
          .swiper-button-prev:after {
            color: rgba(116, 129, 255, 1) !important;
            font-size: 26px !important;
          }
          .swiper-button-next:after {
            color: rgba(116, 129, 255, 1) !important;
            font-size: 26px !important;
          }
             
          `,
        ],
      };
    
      const authorSwiper = useRef("none");
    
      useEffect(() => {
        Object.assign(authorSwiper.current, params);
        authorSwiper.current.initialize();
      }, []);

      
      return (
       <div className={m.wrapper}>
       <Header />
       <div className={m.buyCar__wrapper}>
        <div className={m.buyCar__container}>
      <div className={m.buyCar__info}>
      <h2 className={m.buyCar__title}>The easiest way to buy a car in Canada</h2>
      <button className={m.buyCar__button}>Request a suv</button>
      </div>
      <div className={m.buyCar__slider}>
       <swiper-container  init="false"
        ref={authorSwiper} slides-per-view="1" 
        speed="500" loop="true" 
        css-mode="true" 
        navigation="true"
        
         >
            
        <swiper-slide>
         <img src={Car} alt="img" className={m.slider__image}/>
        </swiper-slide>
        <swiper-slide>
         <img src={Car} alt="img" className={m.slider__image}/>
        </swiper-slide>
        <swiper-slide>
         <img src={Car} alt="img" className={m.slider__image}/>
        </swiper-slide>
       </swiper-container>
      </div>
</div>
       </div>
       <div className={m.itWork}>
        <div className={m.cars__wrapper}>
         <div className={m.itWork__carLeft}><img src={Honda} alt="car" /></div>
         <div className={m.itWork__carRight}><img src={Lexus} alt="car" /></div>
        </div>
        <div className={m.itWork__info}>
         <h3 className={m.itWork__title}>How does it work?</h3>
         <h4 className={m.itWork__subTitle}>From your Phone to your Home</h4>
         <p className={m.itWork__text}>We make it easy for you to buy your dream car from your phone without ever
         having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign 
         anything.</p>
        </div>
       </div>
       <div className={m.steps}>
        <div className={m.steps__items}>
            <h3 className={m.steps__title}>Your perfect car in 5 easy steps</h3>
            <div className={m.step__item}>
              <div className={m.step__iconWrapper}>
                <img src={StepIcon} alt="icon" />
                <span className={m.step__iconNumber}>1</span>
              </div>
              <div className={m.step__item__infoWrapper}>
               <p className={m.step__item__title}>First Contact</p>
               <p className={m.step__item__text}>Tell us what your dream vehicle is.</p>
              </div>
            </div>
            <div className={m.step__item}>
              <div className={m.step__iconWrapper}>
                <img src={StepIcon} alt="icon" />
                <span className={m.step__iconNumber}>2</span>
              </div>
              <div className={m.step__item__infoWrapper}>
               <p className={m.step__item__title}>Vehicle Selection</p>
               <p className={m.step__item__text}>One of our Qualified Agents sends you custom pictures
                and videos of the car you are interested in.</p>
              </div>
            </div>
            <div className={m.step__item}>
              <div className={m.step__iconWrapper}>
                <img src={StepIcon} alt="icon" />
                <span className={m.step__iconNumber}>3</span>
              </div>
              <div className={m.step__item__infoWrapper}>
               <p className={m.step__item__title}>Secure Financing</p>
               <p className={m.step__item__text}>You work with a dedicated Qualified Agent to
                    secure financing on your terms.</p>
              </div>
            </div>
            <div className={m.step__item}>
              <div className={m.step__iconWrapper}>
                <img src={StepIcon} alt="icon" />
                <span className={m.step__iconNumber}>4</span>
              </div>
              <div className={m.step__item__infoWrapper}>
               <p className={m.step__item__title}>Vehicle Delivery</p>
               <p className={m.step__item__text}>We deliver your car to your home or office for
                    you to test drive.</p>
              </div>
            </div>
            <div className={m.step__item}>
              <div className={m.step__iconWrapper}>
                <img src={StepIcon} alt="icon" />
                <span className={m.step__iconNumber}>5</span>
              </div>
              <div className={m.step__item__infoWrapper}>
               <p className={m.step__item__title}>Getting Vehicle</p>
               <p className={m.step__item__text}>If you love the vehicle, you sign the paperwork
                    and keep the car.</p>
              </div>
            </div>
        </div>
        <div className={m.steps__imagesWrapper}>
            <div><img src={StepsImg1} alt="map" className={m.steps__img1} /></div>
            <div><img src={StepsImg2} alt="map" className={m.steps__img2}/></div>
        </div>
       </div>
       <div className={m.advantages}>
         <div className={m.advantages__itemsWraper}>
          <div className={m.advantages__item}>
             <div className={m.advantages__item__imgWrapper}>
                <img src="" alt="bg" className={m.advantages__item__bg}/>
             </div>
             <div className={m.advantages__item__info}>
              <img src="" alt="logo" />
              <h4 className={m.advantages__item__title}></h4>
              <p className={m.advantages__item__text}></p>
             </div>
          </div>
         </div>
       </div>
       </div>
    )
}