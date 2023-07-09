import '../style.scss';
import h from './header.module.scss';
import Logo from '../images/header-logo.svg';
import SearchIcon from '../images/header-search.svg';
import { Button } from './Button';
import {WalletModal} from '../components/WalletModal'
import { MyProfile } from '../pages/MyProfilePage';
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isWalletModalOpen, setWalletModalOpen] = useState(false)
  const handleClick = () => {
  setWalletModalOpen(true)
  }
  const closeModal = () => {
  setWalletModalOpen(false)
  }

      return (
        <div className={h.wrapper}>
           {isWalletModalOpen && <div className={h.overlay}></div>}
          <img src={Logo} alt="logo" className="logo" />
          <div className={h.search}>
          <img src= {SearchIcon} alt="search" />
          <input type="search" className={h.search__input} placeholder='Search for ...' />
          </div>
          <Button handleClick={handleClick} buttonText="Connect wallet"/>
          {isWalletModalOpen && (
         <WalletModal closeModal={closeModal} handleClick={handleClick} />
         )}
         </div>
    )
}