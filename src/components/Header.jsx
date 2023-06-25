//import React from "react";
//import '../style.css';
import h from './header.module.scss';
import Logo from '../images/header-logo.svg';

export const Header = () => {
    return (
        <div className={h.wrapper}>
          <img src={Logo} alt="logo" className="logo" />
        </div>
    )
}