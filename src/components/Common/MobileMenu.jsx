import mm from './mobileMenu.module.scss';
import { Link, Route, Router, Routes } from "react-router-dom";
import { ContuctUs } from '../ContactUs';
import Insta from '../../images/Instagram-mobile.svg';
import Facebook from '../../images/Facebook-mobile.svg';
import Youtube from '../../images/YouTube-mobile.svg';
import Close from '../../images/Burger Menu-close.svg'
import { useState } from 'react';

export const MobileMenu = ({closeModal, openModal}) => {
  const [isOpen, setModalOpen] = useState(false)
 const openNextModal = () => {
  setModalOpen(true)
 }
    return (
        <div className={mm.mobileMenu__wrapper}>
           <div className={mm.mobileMenu__container}>
              <div className={mm.mobileMenu__items}>
              <Link to="/"><div className={mm.mobileMenu__item} onClick={openNextModal}>Contact us</div></Link>
              <Link to="/about"><div className={mm.mobileMenu__item}>About VAC</div></Link>
              <Link to="/loanrates"><div className={mm.mobileMenu__item}>Loan Rates</div></Link>
              <Link to="/video"><div className={mm.mobileMenu__item}>Video</div></Link>
              <Link to="/blog"><div className={mm.mobileMenu__item}>Blog</div></Link>
              <Link to="/"><div className={mm.mobileMenu__item}>Calculate</div></Link>
              </div>
              <Link to='/404'>
              <div className={mm.socialMedia__wrapper}>
                <img src={Insta} alt="icon" />
                <img src={Facebook} alt="icon" />
                <img src={Youtube} alt="icon" />
              </div>
             </Link>
           </div>
           <img src={Close} alt="close" className={mm.mobileMenu__close} onClick={closeModal}/>
           {isOpen &&
           (
           <ContuctUs  closeModal={closeModal} />
           )}
        </div>
    )
}