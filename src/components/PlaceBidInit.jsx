import '../style.scss';
import A from './placeBidInit.module.scss';
import PriceLogo from '../images/price-logo.svg';
import Line from '../images/placebid-line.png';
import React, { useState } from 'react';

export const PlaceBidInit = ({closeModal}) => {
 
    return (
        <div className={A.placeBid}>
        <div className={A.placeBid__current}>
         <p className={A.placeBid__title}>Current Bid:</p>
         <div className={A.placeBid__current__price}>
           <img src={PriceLogo} alt="logo" className={A.placeBid__logo} />
           <span className={A.placeBid__numbers}>1,5M</span>
           <span className={A.placeBid__price}>(1308.54$)</span>
         </div>
        </div>
        <img src={Line} alt="line" />
        <div className={A.placeBid__auction}> 
          <p className={A.placeBid__title}>Auction ending in:</p>   
          <div className={A.placeBid__time__wrapper}>   
          <span className={A.placeBid__auction__time}>1 h</span>
          <span className={A.placeBid__auction__time}>28 m</span>
          <span className={A.placeBid__auction__time}>32 s</span>
          </div>
        </div>
        <img src={Line} alt="line" />
        <div className={A.placeBid__button}>
         <button onClick={closeModal} className={A.placeBid__button__button}>Place a bid</button>
        </div>
        </div>
    )
}