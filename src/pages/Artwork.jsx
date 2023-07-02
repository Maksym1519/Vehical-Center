import '../style.scss';
import A from './artwork.module.scss';
import React, { useState } from 'react';
import {Header} from '../components/Header';
import { ArtName } from '../components/ArtName';
import { ActivityCard } from '../components/Activity-Card';
import { VFHCards } from '../components/WFH-Cards';
import { PlaceBidInit } from '../components/PlaceBidInit';
import { PlaceBidProg } from '../components/PlaceBidProg';
import { PlaceBidFin } from '../components/PlaceBidFin';
import Bg from '../images/Artwork-Bg.png';
import FuncExt from '../images/vhf- external.svg';
import FuncShare from '../images/vhf-share.svg';
import FuncVertical from '../images/vhf-vertical.svg';



 export const Artwork = () => {
   const [currentModal, setCurrentModal] = useState(1)
   const openModal = (modalNumber) => {
      setCurrentModal(modalNumber)
  }
  const closeModal = () => {
      setCurrentModal((prevModal) => prevModal + 1)
  }
    return (
        <div className={A.wrapper}>
         {(currentModal === 2 || currentModal === 3) && <div className={A.overlay}></div>}
         <div className={A.header__wrapper}>   
         <Header />
         </div>
         <div className={A.container}>
         <div className={A.artwork__bg}>
            <img src={Bg} alt="Bg" className={A.artwork__bg__img} />
         </div>
         <div className={A.activity}>
          <div className={A.activity__description}>
           <ArtName />
           <h2 className={A.mainTitle}>WFH - art name</h2>
           <p className={A.activity__description__copy}>Сopy:<span className={A.activity__description__numbers}>2 of 10</span></p>
           <p className={A.activity__text}><span className={A.activity__text_darked}>Description:</span>The iconic meme that became a viral Internet sensation and an indispensable part of the 
            gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of 
            me now "lives" on platforms like Twitch, YouTube, and Bilibili B 站. The iconic meme that became a viral 
            Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very 
            young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and 
            Bilibili B 站.</p> 
            <div className={A.activity__functions}>
             <div className={A.activity__imgWrapper}><img src={FuncExt} alt="icon" /></div>
             <div className={A.activity__imgWrapper}><img src={FuncShare} alt="icon" /></div>
             <div className={A.activity__imgWrapper}><img src={FuncVertical} alt="icon" /></div>
            </div>
          </div>
           <div className={A.activity__users}>
              <h3 className={A.title}>Activity</h3>
              <div className={A.activity__users__container}>
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              </div>
           </div>
         {currentModal === 1 && <PlaceBidInit closeModal={closeModal}/>}
         {currentModal === 2 && <PlaceBidProg openModal={openModal} closeModal={closeModal}/>}
         {currentModal === 3 && <PlaceBidFin openModal={openModal} closeModal={closeModal}/>}
         </div>
         <div className={A.title__container}>
            <h3 className={A.title__container__title}>Feature works</h3>
         </div>
         <VFHCards />
         </div>
         </div>
    )
     }


