import '../style.scss';
import h from './header.module.scss';
import Logo from '../images/header-logo.svg';
import SearchIcon from '../images/header-search.svg';
import { Button } from './Button';
import {WalletModal} from '../components/WalletModal'
import { MyProfile } from '../pages/MyProfilePage';
import React, { useState, useEffect } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Main } from '../pages/Main';


export const Header = () => {
  const [isWalletModalOpen, setWalletModalOpen] = useState(false)
  const handleClick = () => {
  setWalletModalOpen(true)
  }
  const closeModal = () => {
  setWalletModalOpen(false)
  }

      return (
        <div>
        <div className={h.wrapper}>
           {isWalletModalOpen && <div className={h.overlay}></div>}
           <Link to="/"><img src={Logo} alt="logo" className="logo" /></Link>
          <div className={h.search}>
          <img src= {SearchIcon} alt="search" />
          <input type="search" className={h.search__input} placeholder='Search for ...' />
          </div>
          <Button handleClick={handleClick} buttonText="Connect wallet"/>
          {isWalletModalOpen && (
         <WalletModal closeModal={closeModal} handleClick={handleClick} />
         )}
         </div>
        </div>
        
    )
}