import '../../style.scss';
import Ca from './createArtModal.module.scss';
import CloseWindow from '../../images/close.svg'
import { ProfileVFHCard } from './ProfileWFH-card';
import { EndingTime } from './EndingTimeModal';
import { CreateArtModal2 } from './createArtModal2';
import React, { useState } from 'react';

export const CreateArtModal = ({openModal, closeModal}) => {
  const [isEndingTimeModalOpen, setEndingTimeModalOpen] = useState(false);

  const handleModalClose = () => {
    closeModal(); // Вызывает функцию, переданную из компонента ProfileHeader
    
  };
  const handleModalOpen = () => {
    openModal(); // Вызывает функцию, переданную из компонента ProfileHeader
  };
  const handleOpenEndingTimeModal = () => {
    setEndingTimeModalOpen(true);
  };
  
  const handleCloseEndingTimeModal = () => {
    setEndingTimeModalOpen(false);
  };
  
    return (
      <div>
      {
        isEndingTimeModalOpen ? (
          <CreateArtModal2 openModal={handleOpenEndingTimeModal} closeModal={handleModalClose} />
        ) : (
        <div className={Ca.wrapper}>
         <div className={Ca.container}>
          <h2 className={Ca.title}>Creating artwork</h2>
          <div className={Ca.predictionText}>Your artwork wasn’t approved. Cause is: Amet minim mollit non 
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
           Exercitation veniam consequat sunt nostrud amet. </div>
          <div className={Ca.progressBar__wrapper}>
            <div className={Ca.progressBar__itemWrapper}>
            <div className={Ca.progressBar__item1}></div>
            <div className={Ca.progressBar__item}></div>
            <div className={Ca.progressBar__item}></div>
            </div>
            <p className={Ca.progressBar__textInfo}>Step 1 from 3</p>
            </div>
            <p className={Ca.uploadTitle}>Upload the artwork you will be selling</p>
            <div className={Ca.upload__body}>
              <div className={Ca.upload__description}>
                 <span className={Ca.upload__description__text}>1500x500px.</span>
                 <span className={Ca.upload__description__text}>JPG, PNG or GIF.</span>
                 <span className={Ca.upload__description__text}>100MB max size.</span>
              </div>
              <p className={Ca.upload__textBottom}>Drag and drop an image here, or click to browse</p>
            </div>
            <button className={Ca.button} onClick={handleOpenEndingTimeModal}>Next step</button>
          </div>
          <img src={CloseWindow} alt="close" className={Ca.closeWindow} onClick={handleModalClose} />
          {isEndingTimeModalOpen && <CreateArtModal2 openModal={handleOpenEndingTimeModal} closeModal={handleCloseEndingTimeModal} />}
         </div>)}
         </div>
       )
}