import '../style.scss';
import Fm from './followModal.module.scss';
import React, { useState } from 'react';
import {FollowModalItem} from '../components/FollowModalItem';
import Ava1 from '../images/follow-modal1.png';
import Ava2 from '../images/follow-modal2.png';
import Ava3 from '../images/follow-modal3.png';
import Ava4 from '../images/follow-modal4.png';
import Ava5 from '../images/follow-modal5.png';
import Close from '../images/close.svg'

export const FollowModal = ({closeModal}) => {
  const images = [Ava1,Ava2,Ava3,Ava4,Ava5]
  
    return (
        <div className={Fm.wrapper}>
          <div className={Fm.container}>
           <div className={Fm.navigation}>
             <span className={Fm.navigation__item}>Following</span>
             <span className={Fm.navigation__item}>Followers</span>
           </div>
           {images.map((image,index) => (
            <FollowModalItem key={index} img={image} />
           ))}
           <img src={Close} alt="close" className={Fm.close} onClick={closeModal}/>
          </div>
          </div>
    )
}