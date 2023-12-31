import As from './articlesSlider.module.scss';
import { Link } from 'react-router-dom';
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
import Slider1 from '../images/article-slider1.webp';
import Slider2 from '../images/article-slider2.webp';
import Slider3 from '../images/article-slider3.webp';

export const ArticlesSlider = ({text}) => {
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
      @media (max-width: 465px) {
        .swiper-button-prev {
          width: 35px !important;
          height: 35px !important;
          border-radius: 50% !important;
          background: rgba(116, 129, 255, 1) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transform:translate(-33%, -11%) !important;
        }
        .swiper-button-next {
          width: 35px !important;
          height: 35px !important;
          border-radius: 50% !important;
          background: rgba(116, 129, 255, 1) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transform:translate(34%, -9%) !important;
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

  const articleSwiper = useRef("none");

  useEffect(() => {
    Object.assign(articleSwiper.current, params);
    articleSwiper.current.initialize();
  }, []);
  const articleSwiperTablet = useRef("none");

  useEffect(() => {
    Object.assign(articleSwiperTablet.current, params);
    articleSwiperTablet.current.initialize();
  }, []);
  const articleSwiperTMobile = useRef("none");

  useEffect(() => {
    Object.assign(articleSwiperTMobile.current, params);
    articleSwiperTMobile.current.initialize();
  }, []);

    return (
        <div className={As.articles}>
        <div className={As.articles__container}>
          <h3 className={As.articles__title}>{text}</h3>
          <div className={As.articles__slider}>
          <swiper-container
            init="false"
            ref={articleSwiper}
            slides-per-view="1"
            speed="500"
            //loop="true"
            css-mode="true"
            navigation="true"
            class="sliderArticles"
        >
                   
            <swiper-slide>
              <div className={As.slider__wrapper}>        
                    <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider1} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
            <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider2} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How fast can you order a car in Canada?</p>
                    </div>
                </div>
            <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider3} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
                </div>
                </swiper-slide>
              
                <swiper-slide>
                  <div className={As.slider__wrapper}>
                <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider1} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
                <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider2} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How fast can you order a car in Canada?</p>
                    </div>
                    </div>
                  <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider3} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                    </div>
                </div>
            </swiper-slide>
          </swiper-container>
          <swiper-container
            init="false"
            ref={articleSwiperTablet}
            slides-per-view="1"
            speed="500"
            //loop="true"
            css-mode="true"
            navigation="true"
            class="sliderArticlesTablet"
        >
                   
            <swiper-slide>
              <div className={As.slider__wrapper}>        
                    <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider1} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
        
            <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider3} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
                </div>
                </swiper-slide>
              
                <swiper-slide>
                  <div className={As.slider__wrapper}>
                <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider1} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             
                  <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider3} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                    </div>
                </div>
            </swiper-slide>
          </swiper-container>
          <swiper-container
            init="false"
            ref={articleSwiperTMobile}
            slides-per-view="1"
            speed="500"
            //loop="true"
            css-mode="true"
            navigation="true"
            class="sliderArticlesMobile"
            >
                   
            <swiper-slide>
              <div className={As.slider__wrapper}>        
                    <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider1} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
            
                </div>
                </swiper-slide>
              
                <swiper-slide>
                  <div className={As.slider__wrapper}>
                <div className={As.slider__item}>
                    <div className={As.slider__item__bgWrapper}>
                      <img src={Slider1} alt="bg" />
                    </div>
                    <div className={As.slider__item__info}>
                      <p className={As.slider__item__date}>10 May, 2020</p>
                      <p className={As.slider__item__text}>How to save on buying a car? Why is it better to buy from us</p>
                    </div>
                </div>
             
                </div>
            </swiper-slide>
          </swiper-container>
          </div>
          <Link to='/404'>
          <button className={As.articles__button}>all articles</button>
          </Link>
        </div>
       
       </div>
    )
}