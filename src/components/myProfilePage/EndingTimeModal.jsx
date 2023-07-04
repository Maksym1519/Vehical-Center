import '../../style.scss';
import Et from './endingTimeModal.module.scss';
import CloseTime from '../../images/close-time.svg';
import CloseWindow from '../../images/close.svg';
import React, { useState } from 'react';

export const EndingTime = ({openModal, closeModal}) => {
  const handleModalClose = () => {
    closeModal(); // Вызывает функцию, переданную из компонента ProfileHeader
    //setEndingTimeModalOpen(false);
  };
      return (
        <div className={Et.wrapper}>
         <div className={Et.container}>
          <h2 className={Et.title}>Changing ending time</h2>
          <div className={Et.time__wrapper}>
           <span className={Et.time__title}>Selling will end</span>
           <div className={Et.time__functions}>
            <span className={Et.time__functions_viewTime}>22.02.2020</span>
            <span className={Et.time__functions_viewTime}>23:45</span>
            <span className={Et.time__functions_darkedText}>05h 02m 41s</span>
            <div className={Et.time__delete}>
            <img src={CloseTime} alt="close" />
            <span className={Et.time__delete__text}>delete file</span>
            </div>
           </div>
          </div>
          <button className={Et.button}>Change</button>
         </div>
         <img src={CloseWindow} alt="close" className={Et.closeWindow} onClick={handleModalClose}/>
        </div>
    )
}