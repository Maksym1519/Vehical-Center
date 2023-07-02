import '../style.scss';
import Pp from './placeBidProg.module.scss';
import Close from '../images/close.svg';
import React, { useState } from 'react';

export const PlaceBidProg = ({openModal, closeModal}) => {
    const handleCloseModal = () => {
        closeModal();
      };
    
    return (
        <div className={Pp.body}>
         <div className={Pp.header}>
         <h3 className={Pp.header__title}>Place a bid</h3>
         <img src={Close} alt="img" className={Pp.close} onClick={handleCloseModal}/>
         </div>
         <div>   
            <h4 className={Pp.title}>Min.sum</h4>
            <div className={Pp.price__body}>
                <div className={Pp.price_wrapper}>
                <span className={Pp.price__numbers}>10000000</span>
                <span className={Pp.price__taste}>TASTE</span>
                </div>
                <span className={Pp.price__price}>(1308.54$)</span>
            </div>
         </div>
         <button onClick={closeModal} className={Pp.button}>Place</button>
        </div>
    )
}