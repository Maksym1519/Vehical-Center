import '../../style.scss';
import Am from './createArtModal2.module.scss';
import CloseWindow from '../../images/close.svg'
import { ProfileVFHCard } from './ProfileWFH-card';
import { EndingTime } from './EndingTimeModal';
import { CreateArtModal3 } from './createArtModal3';
import BgImg from '../../images/createArt.png';
import Icon1 from '../../images/createArt-img1.svg';
import Icon2 from '../../images/createArt-img2.svg';
import Icon3 from '../../images/createArt-img3.svg';
import React, { useState } from 'react';

export const CreateArtModal2 = ({closeModal, openModal}) => {
  //const [isOpenCurrentWindow, setOpenNextWindow] = useState(false)
  const [isEndingTimeModalOpen, setEndingTimeModalOpen] = useState(false);
  
  const handleOpenEndingTimeModal = () => {
    setEndingTimeModalOpen(true);
  };

  const handleCloseEndingTimeModal = () => {
    setEndingTimeModalOpen(false);
  };
  // const openArt3Modal = () => {
  //   setOpenNextWindow(true)
  // }
  // const closeArt3Modal = () => {
  //   setOpenNextWindow(false)
  // }
    return (
   <div>
       {
        isEndingTimeModalOpen ? 
        (<CreateArtModal3 openModal={handleOpenEndingTimeModal} closeModal={handleCloseEndingTimeModal}/>):(
       <div className={Am.wrapper}>
         <div className={Am.container}>
          <h2 className={Am.title}>Creating artwork</h2>
            <div className={Am.progressBar__wrapper}>
            <div className={Am.progressBar__itemWrapper}>
            <div className={Am.progressBar__itemColored}></div>
            <div className={Am.progressBar__itemColored}></div>
            <div className={Am.progressBar__item}></div>
            </div>
            <p className={Am.progressBar__textInfo}>Step 1 from 3</p>
            </div>
            <p className={Am.uploadTitle}>Upload the artwork you will be selling</p>
            <div className={Am.upload__body}>
             <img src={BgImg} alt="img" />
            </div>
            <div className={Am.icons__wrapper}>
             <img src={Icon1} alt="icon" />
             <img src={Icon2} alt="icon" />
             <img src={Icon3} alt="icon" />
            </div>
            <button className={Am.button} onClick={handleOpenEndingTimeModal}>Next step</button>
          </div>
          <img src={CloseWindow} alt="close" className={Am.closeWindow} onClick={closeModal}/>
          {/* {isEndingTimeModalOpen && 
             <CreateArtModal3 openModal={handleOpenEndingTimeModal} closeModal={handleCloseEndingTimeModal}/>
          } */}
         </div>
)}
         </div>
      
    )
}