import hc from "./headerCar.module.scss";
import { Link, Route, Router, Routes } from "react-router-dom";
import Logo from "../../../images/Logo.svg";
import LogoMob from "../../../images/logo-mobile.svg";
import LogoText from "../../../images/logo-mob-text.svg";
import { Button } from "../Button";
import { CarButton } from "./HeaderCar";
import { CarButtonHeader } from "../../../pages/Car/CarButton";
import { MobileMenu } from "../MobileMenu";
import { ContuctUs } from "../../ContactUs";
import { ContuctUsComplete } from "../../ContactUsCoplete";
import { useState } from "react";

export const HeaderQuiz = ({ isCustomStyle }) => {
  const [isOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className={hc.header__wrapper}>
        <div className={hc.header__container}>
          <Link to="/">
            <div className={hc.headerLogo}>
              <img src={Logo} alt="logo" className={hc.logo} />
              <img src={LogoMob} alt="logo" className={hc.logoMob} />
              <img src={LogoText} alt="text" className={hc.logoText} />
            </div>
          </Link>
          <div className={hc.header__buttonWrapper}>
            <div
              className={`${hc.header__inventoryButton} ${
                isCustomStyle ? hc.customStyle : ""
              }`}
            >
              Inventory
            </div>
          </div>
          <div className={hc.header__burger} onClick={openModal}>
            <span></span>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu closeModal={closeModal} />}
    </div>
  );
};
