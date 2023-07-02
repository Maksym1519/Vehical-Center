import '../../style.scss';
import Cp from './aboutUser.module.scss';
import React, { useState } from 'react';
import {ArtName} from '../ArtName';
import TwichLogo from '../../images/twich-logo.svg';
import InstagramLogo from '../../images/instagram-logo.svg';
import TwitterLogo from '../../images/twitter-logo.svg';
import OnlyfansLogo from '../../images/onlyfans-logo.svg';
import LogoExt from '../../images/vhf- external.svg';
import LogoShare from '../../images/vhf-share.svg';
import LogoVert from '../../images/vhf-vertical.svg';
import { FollowModal } from '../../pages/FollowModal';

export const AboutUser = () => {
     const [isModalOpen, setIsModalOpen] = useState(false)
      const openModal = () => {
          setIsModalOpen(true)
      }
      const closeModal = () => {
          setIsModalOpen(false)
      }
      return (
        <div className={Cp.aboutCreator}>
          {isModalOpen &&<div className={Cp.overlay}></div>}
         <div className={Cp.description}>
         <div className={Cp.userName__wrapper}>
         <ArtName />
         </div>
         <div className={Cp.social__media__wrapper}>
          <div className={Cp.social__media__item}>
           <img src={TwichLogo} alt="logo" />
           <span className={Cp.social__media__text}>Twitch</span>
          </div>
          <div className={Cp.social__media__item}>
          <img src={InstagramLogo} alt="logo" />
           <span className={Cp.social__media__text}>Instagram</span>
          </div>
          <div className={Cp.social__media__item}>
          <img src={TwitterLogo} alt="logo" />
           <span className={Cp.social__media__text}>Twitter</span>
          </div>
          <div className={Cp.social__media__item}>
          <img src={OnlyfansLogo} alt="logo" />
           <span className={Cp.social__media__text}>Onlyfans</span>
          </div>
         </div>
         <div className={Cp.description__text}>
          <p className={Cp.description__text__text}>
          <span className={Cp.description__text_darked}>Description: </span>The iconic meme that became a viral Internet sensation and an indispensable part of the 
          gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part 
          of me now "lives" on platforms like Twitch, YouTube, and Bilibili B 站. The iconic meme that became a viral 
          Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very
           young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, 
           and Bilibili B 站.
          </p>
         </div>
         <div className={Cp.status__wrapper}>
          <a href="#" className={Cp.status__link}>Created</a>
          <a href="#" className={Cp.status__link}>Collected</a>
         </div>
         </div>
         <div className={Cp.follow__wrapper}>
            <div className={Cp.follow__statistics}>
                <div className={Cp.follow__statistics__item}>
                  <span className={Cp.follow__statistics__numbers}>234</span>
                  <span className={Cp.follow__statistics__text}>Followers</span>
                </div>
                <div className={Cp.follow__statistics__item}>
                <span className={Cp.follow__statistics__numbers}>16</span>
                  <span className={Cp.follow__statistics__text}>Following</span>
                </div>
            </div>
            <button onClick={openModal} className={Cp.follow__button}>Follow</button>
            <div className={Cp.follow__share}>
             <div className={Cp.follow__item}>
                <img src={LogoExt} alt="logo" />
             </div>
             <div className={Cp.follow__item}>
                <img src={LogoShare} alt="logo" />
             </div>
             <div className={Cp.follow__item}>
                <img src={LogoVert} alt="logo" />
             </div>
            </div>
         </div>
          {isModalOpen && <FollowModal closeModal={closeModal} />} 
        </div>
    )
}