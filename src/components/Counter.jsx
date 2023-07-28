import { Button } from './Common/Button';
import { ButtonCounter } from './Common/Button';
import Cc from './counter.module.scss';
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";

export const Counter = ({text,title,buttonText,styleForCounter, buttonStyle}) => {
    register();
    const params = {
      injectStyles: [
        `
        .slider {
            -webkit-appearance: none;  /* Override default CSS styles */
            appearance: none;
            width: 100%; /* Full-width */
            height: 25px; /* Specified height */
            background: #d3d3d3; /* Grey background */
            outline: none; /* Remove outline */
            opacity: 0.1; /* Set transparency (for mouse-over effects on hover) */
            -webkit-transition: .2s; /* 0.2 seconds transition on hover */
            transition: opacity .2s;
        }
               
            `,
      ],
    };
     
    const [price, setPrice] = useState(10000);
    const [time, setTime] = useState(12);
    const handleSliderChange = (event) => {
        const newPrice = parseInt(event.target.value);
        setPrice(newPrice);
      };
    const handleSliderTimeChange = (event) => {
        const newTime = parseInt(event.target.value);
        setTime(newTime);
      };
      const calculateMonthPayment = Math.floor(price / time)
      const calculateWeekPayment = Math.floor(calculateMonthPayment / 4)
      const calculateBiWeekPayment = Math.floor(calculateMonthPayment / 2)

      const buttonLabel = buttonText ? buttonText : 'Request a Car';
      //--------------------------------------------
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Добавляем слушатель события изменения размера окна
        window.addEventListener('resize', handleResize);
    
        // Очищаем слушатель события при размонтировании компонента
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <div className={Cc.counter}>
          <div className={Cc.counter__container}>
              <div className={Cc.counter__description}>
               <div className={Cc.counter__description__title}>{title}</div>
               <div className={Cc.counter__description__text}>{text}</div>
           </div>
           <div className={Cc.counter__inputHandling}>
           <div className={Cc.counter__states}>
            <div className={Cc.counter__switcher}>
              <div className={Cc.counter__switcher__item}>Poor</div>
              <div className={Cc.counter__switcher__item + " " + Cc.counter__switcher__itemMidle}>Average</div>
              <div className={Cc.counter__switcher__item}>Good</div>
            </div>
            <div className={Cc.counter__inputWrapper}>
              <div className={Cc.counter__input__body}>
              <span className={Cc.counter__input__text}>Loan Amount</span>
                <div className={Cc.counter__priceWrapper}>
                    <span className={Cc.counter__bucksLogo}>$</span>
                    <span className={Cc.counter__input__numbers}>{price}</span>
                    </div>
                 </div>
              <div className={Cc.counter__input}>
                <input type="range" 
                 min="0"
                 max="150000"
                 value={price}
                 onChange={handleSliderChange}
                 className={Cc.counter__input__input}/>
              </div>
            </div>
            <div className={Cc.counter__inputWrapper}>
            <div className={Cc.counter__input__body}>
            <span className={Cc.counter__input__text}>Loan Duration</span>
              <div className={Cc.counter__priceWrapper}>
              <span className={Cc.counter__duration}>{time}</span>
                <span className={Cc.counter__durationText}>month</span>
              </div>
            </div>
              <div className={Cc.counter__input}>
                <input type="range" 
                min="0"
                max="60"
                value={time}
                onChange={handleSliderTimeChange}
                className={Cc.counter__input__input}/>
              </div>
            </div>
           </div>
            <div className={Cc.counter__result} style={{ ...styleForCounter, width: windowWidth >= 1025 ? '500px' : '100%' }}>
             <div className={Cc.biPayment}>
               <span className={Cc.biPayment__title}>Bi-Weekly Payment</span>
                <div className={Cc.result__priceWrapper}>
               <span className={Cc.biPayment__bucksLogo}>$</span>
               <span className={Cc.biPayment__numbers}>{calculateBiWeekPayment}</span>
               </div>
             </div>
             <div className={Cc.weekPayment}>
               <span className={Cc.weekPayment__title}>Monthly Payment</span>
               <div className={Cc.result__priceWrapper}>  
               <span className={Cc.weekPayment__bucksLogo}>$</span>
               <span className={Cc.weekPayment__numbers}>{calculateMonthPayment}</span>
               </div>
             </div>
             <div className={Cc.monthPayment}>
               <span className={Cc.monthPayment__title}>Weekly Payment</span>
               <div className={Cc.result__priceWrapper}>
               <span className={Cc.monthPayment__bucksLogo}>$</span>
               <span className={Cc.monthPayment__numbers}>{calculateWeekPayment}</span>
               </div>
             </div>
           <ButtonCounter text={buttonLabel} style={{buttonStyle}} />
           </div>
            </div>
            </div>
           </div>
       )
}