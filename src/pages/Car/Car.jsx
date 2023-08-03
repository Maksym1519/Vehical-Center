import ca from "./car.module.scss";
import React, { lazy, Suspense } from 'react';
import { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { HeaderCar } from "../../components/Common/Header/HeaderCar";
//import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Common/Footer/Footer";
import { CarButtonHeaderMobile } from "./CarButton";
const CounterLazy = lazy(()=>import('../../components/Counter'));
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cards";
import "swiper/css/effect-creative";
import "swiper/swiper-bundle.css";
import CarBg from "../../images/CarPage-bg.webp";
import Share from "../../images/car-Share.svg";
import Car1 from "../../images/car-slide1.webp";
import Car2 from "../../images/car-slide2.webp";
import Car3 from "../../images/car-slide3.webp";
import ArrowLeft from '../../images/Arrow-360-left.svg';
import ArrowRight from '../../images/Arrow-360-right.svg';
import Rotate from '../../images/360.svg';


function LoadingInfo () {
  return <h2>Loading...</h2>
  
}
 const Car = () => {
  register();
  const params = {
    injectStyles: [
      `

      swiper-container {
        max-width: 100% !important;
      }
      @media (min-width: 1025px) {
      .swiper-wrapper {
        width: 100% !important;
        column-gap: 10px !important;
        }
      }
      swiper-slide {
        //width: 168px !important;
        //max-width: 168px !important;
       }
       swiper-slide:nth-child(1) {
        margin-left: -120px !important
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
        .swiper-wrapper {
          width: 100% !important;
          column-gap: 5px !important;
          }
          swiper-container {
            max-width: 320px !important;
          }
          .swiper-button-prev {
          width: 35px !important;
          height: 35px !important;
          border-radius: 50% !important;
          background: rgba(116, 129, 255, 1) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transform:translate(-33%, 9%) !important;
        }
        .swiper-button-next {
          width: 35px !important;
          height: 35px !important;
          border-radius: 50% !important;
          background: rgba(116, 129, 255, 1) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transform:translate(34%, 9%) !important;
        }
        .swiper-button-prev:after {
          color: rgba(255, 255, 255, 1) !important;
          font-size: 18px !important;
        }
        .swiper-button-next:after {
          color: rgba(255, 255, 255, 1) !important;
          font-size: 18px !important;
        }
        swiper-slide:nth-child(1) {
          margin-left: -45px !important
         }
      }
         `,
    ],
  };

  const carSlider = useRef("none");

  useEffect(() => {
    Object.assign(carSlider.current, params);
    carSlider.current.initialize();
  }, []);
  //------------------------------------
  const textForButton = "apply for this vehicle";
  const counterStyle = {
    width: "500px",
  };
  const buttonStyle = {
    minWidth: "100%",
    width: "100%",
     };
  //---------------------------------------------
  
    const handleMouseEnter = (event) => {
      event.target.classList.add('rotate-360'); // Add the 'rotate-360' class on mouse enter
    };
  
    const handleMouseLeave = (event) => {
      event.target.classList.remove('rotate-360'); // Remove the 'rotate-360' class on mouse leave
    }
  return (
    <div className={ca.carPage__wrapper}>
      <div className={ca.header__wrapper}>
        <HeaderCar />
      </div>
      <div className={ca.carPage__container}>
        <div className={ca.car__card}>
          <div className={ca.car__card__display}>
            <div className={ca.display__header}>
              <h3 className={ca.display__header__title}>Porsche Panamera 4S</h3>
              <span className={ca.display__header__text}>
                Watching now 8 people
              </span>
            </div>
            <div className={ca.display__image__navigation}>
              <div className={ca.display__image__wrapper} >
                <img src={CarBg} alt="bg" className={ca.display__image__rotation} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} loading="lazy"/>
              </div>
              <div className={ca.navigation__items__body}>
                <div className={ca.navigation__items__exterior}>
                  <div className={ca.navigation__item}>Exterior</div>
                  <div className={ca.navigation__item}>Interior</div>
                </div>
                <div>
                  <img src={Share} alt="icon" className={ca.share__icon} />
                </div>
              </div>
              <div className={ca.navigation__button}>
                <img src={ArrowLeft} alt="arrow" />
                <img src={Rotate} alt="icon" />
                <img src={ArrowRight} alt="arrow" />
              </div>
            </div>
            <div className={ca.cars__slider}>
              <swiper-container
                init="false"
                ref={carSlider}
                slides-per-view="1"
                speed="500"
                //loop="true"
                css-mode="true"
                navigation="true"
                class="carSlider"
              >
                <swiper-slide className="car_slide1">
                  <div className={ca.car__slide__wrapper}>
                    <img src={Car1} alt="img" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className={ca.car__slide__wrapper}>
                    <img src={Car2} alt="img" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className={ca.car__slide__wrapper}>
                    <img src={Car3} alt="img" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className={ca.car__slide__wrapper}>
                    <img src={Car1} alt="img" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className={ca.car__slide__wrapper}>
                    <img src={Car2} alt="img" />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className={ca.car__slide__wrapper}>
                    <img src={Car3} alt="img" />
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <div className={ca.display__button__wrapper}><CarButtonHeaderMobile text={'apply for this vehicle'} /></div>
          </div>
          <div className={ca.car__card__description}>
            <div className={ca.card_description__main}>
              <div className={ca.description__main__price}>
                <h4 className={ca.description__title}>Price</h4>
                <span className={ca.main__price__sum}>34 000 $</span>
              </div>

              <div className={ca.main__body__type}>
                <h4 className={ca.description__title}>Body</h4>
                <span className={ca.body__type__name}>Sedan</span>
              </div>
              <div className={ca.main__body__year}>
                <h4 className={ca.description__title}>Year</h4>
                <span className={ca.body__year__year}>2018</span>
              </div>
              <div className={ca.main__body__type}>
                <h4 className={ca.description__title}>Transmission</h4>
                <span className={ca.body__type__name}>Automatic</span>
              </div>
              <div className={ca.main__body__year}>
                <h4 className={ca.description__title}>Kilometres </h4>
                <span className={ca.body__year__year}>20 000</span>
              </div>
            </div>
            <div className={ca.descriptions__details}>
              <h4
                className={
                  ca.description__title + " " + ca.description__title__grid
                }
              >
                Detail
              </h4>
              <div className={ca.descriptions__details__container}>
                <span className={ca.details__item}>Rear wheel drive</span>
                <span className={ca.details__item}>2500-4000 rpm</span>
                <span className={ca.details__item}>6 cylinders</span>
                <span className={ca.details__item}>0-100 in 2.7 s.</span>
                <span className={ca.details__item}>11 l. per 100 km.</span>
                <span className={ca.details__item}>Power steering</span>
                <span className={ca.details__item}>Rear wheel drive</span>
                <span className={ca.details__item}>2500-4000 rpm</span>
              </div>
            </div>
            <div className={ca.description__textInfo}>
              <h4 className={ca.textInfo__title + " " + ca.description__title}>
                Description
              </h4>
              <p className={ca.textInfo__text}>
                Porsche 911 - a sports car manufactured by the German company
                Porsche AG in the back of a two-door coupe or a convertible
                based on it, produced in different generations from 1964 to the
                present day.<br></br> The 911 index was not originally planned
                for the timeless designation of different generations of the
                same car, and was no more than one of many similar in the
                through three-digit internal factory numbering of all Porsche
                models assigned to a very specific 1964 model.
              </p>
              <button className={ca.textInfo__button}>
                Request more information
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={ca.counter__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
        <CounterLazy
          title={"Calculate the installment plan for this car."}
          buttonText={textForButton}
          styleForCounter={counterStyle}
          buttonStyle={buttonStyle}
        />
         </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Car;
