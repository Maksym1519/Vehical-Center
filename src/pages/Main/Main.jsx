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
import Adv1 from '../../images/advantages-bg1-3.webp';
import Adv2 from '../../images/advantages-bg2.webp';
import AdvLogo1 from '../../images/adv-logo1.svg';
import AdvLogo2 from '../../images/adv-logo2.svg';
import AdvLogo3 from '../../images/adv-logo3.svg';
import Car1 from '../../images/choose-car-img1.webp';
import Car2 from '../../images/choose-car-img2.webp';
import { Button } from '../../components/Common/Button';
import { ClientSlider } from '../../components/ClientSlider';
import { Counter } from '../../components/Counter';
import { ArticlesSlider } from '../../components/ArticlesSlider';


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
        <div className={m.advantages__container}>
        <h3 className={m.advantages__title}>Advantages of working with us</h3>
         <div className={m.advantages__itemsWraper}>
          <div className={m.advantages__item}>
             <div className={m.advantages__item__imgWrapper}>
                <img src={Adv1} alt="bg" className={m.advantages__item__bg}/>
             </div>
             <div className={m.advantages__item__info + ' ' +  m.advantages__item__info1}>
              <img src={AdvLogo1} alt="logo" />
              <h4 className={m.advantages__item__title}>Vehicle Delivery</h4>
              <p className={m.advantages__item__text}>We deliver your vehicle directly to your door. You don’t sign 
              anything until you test drive the vehicle. There is never any obligation to buy beforehand.</p>
             </div>
          </div>
          <div className={m.advantages__item}>
             <div className={m.advantages__item__imgWrapper + " " + m.advantages__item__imgWrapper2}>
                <img src={Adv2} alt="bg" className={m.advantages__item__bg}/>
             </div>
             <div className={m.advantages__item__info + ' ' +  m.advantages__item__info2}>
              <img src={AdvLogo2} alt="logo" />
              <h4 className={m.advantages__item__title}>Auto Financing</h4>
              <p className={m.advantages__item__text}>We partner with the largest lenders in Canada to offer the 
              strongest financing options in the industry—including rates as low as 4%</p>
             </div>
          </div>
          <div className={m.advantages__item}>
             <div className={m.advantages__item__imgWrapper}>
                <img src={Adv1} alt="bg" className={m.advantages__item__bg}/>
             </div>
             <div className={m.advantages__item__info + ' ' +  m.advantages__item__info3}>
              <img src={AdvLogo3} alt="logo" />
              <h4 className={m.advantages__item__title}>Huge Inventory</h4>
              <p className={m.advantages__item__text}>We have access to thousands of high-quality vehicles and offer 
              them to you at wholesale prices. Your dream car is waiting for you</p>
             </div>
          </div>
         </div>
          </div> 
       </div>
       <div className={m.chooseCar}>
         <div className={m.chooseCar__container}>
           <div className={m.images__wrapper}>
            <img src={Car1} alt="cars" className={m.chooseCar__car1} />
            <img src={Car2} alt="cars" className={m.chooseCar__car2}/>
           </div>
           <div className={m.chooseCar__info}>
              <h3 className={m.chooseCar__info__title}>Сhoose your dream vehicle in our catalog</h3>
              <p className={m.chooseCar__info__text}>In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
              <button className={m.chooseCar__info__button}>Inventory</button>
           </div>
         </div>
       </div>
       <div className={m.statistics}>
         <div className={m.statistics__container}>
          <div className={m.statistics__description}>
            <h3 className={m.description__title}>Happy customers</h3>
            <p className={m.description__text}>Since 2017, we have helped thousands of Canadians get their dream vehicles 
            from the comfort of their homes. </p>
          </div>
          <div className={m.statistics__itemsWrapper}>
            <div className={m.statistics__item}>
              <span className={m.statistics__item__numbers}>7,988+</span>
              <span className={m.statistics__item__text}>Sold Cars</span>
            </div>
            <div className={m.statistics__item}>
              <span className={m.statistics__item__numbers}>16,974+</span>
              <span className={m.statistics__item__text}>Vehicles To Choose From</span>
            </div>
            <div className={m.statistics__item}>
              <span className={m.statistics__item__numbers}>123</span>
              <span className={m.statistics__item__text}>Experts Across Canada</span>
            </div>
          </div>
          <div className={m.statistics__order}>
            <h3 className={m.statistics__order__title}>What are you waiting? Get started right now!</h3>
            <Button />
          </div>
         </div>
       </div>
     <ClientSlider />
     <Counter />
    <ArticlesSlider />
       </div>
    )
}