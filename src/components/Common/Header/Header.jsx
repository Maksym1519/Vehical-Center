import h from './header.module.scss';
import { Link, Route, Router, Routes } from "react-router-dom";
import Logo from '../../../images/Logo.svg';
import LogoMob from '../../../images/logo-mobile.svg';
import LogoText from '../../../images/logo-mob-text.svg';
import { Button } from '../Button';
import { MobileMenu } from '../MobileMenu';
import { ContuctUs } from '../../ContactUs';
import { ContuctUsComplete } from '../../ContactUsCoplete';
import { useState } from 'react';

 const Header = ({ isCustomStyle }) => {
  const [isOpen, setModalOpen] = useState(false)
  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }


    return (
        <div>
          <div className={h.header__wrapper}>
          <div className={h.header__container}>
            <Link to="/">
           <div className={h.headerLogo}>
            <img src={Logo} alt="logo" className={h.logo} />
            <img src={LogoMob} alt="logo" className={h.logoMob} />
            <img src={LogoText} alt="text" className={h.logoText} />
           </div>
            </Link>
           <div className={h.header__buttonWrapper}>
            <Link to='/catalog'>
            <div className={`${h.header__inventoryButton} ${
                isCustomStyle ? h.customStyle : ""}`}>
            Inventory
            </div>
            </Link>
            <Link to="/car">
             <div className={h.header__button}>
             Request a car
             </div>
             </Link>
            </div>
           <div className={h.header__burger} onClick={openModal}>
            <span></span>
           </div>
          </div>
        </div>
        {isOpen && (
        <MobileMenu closeModal={closeModal}/>
        )}
        </div>
    )
}

export default Header;