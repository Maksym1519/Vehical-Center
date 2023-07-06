import "../../style.scss";
import Bm from "./bnbModal.module.scss";
import Close from '../../images/close.svg';
import Back from '../../images/Back.svg';
import Logo from '../../images/deposit-modal-logo.svg'
import React, { useState } from "react";

export const BNBModal = ({backToWithdrawModal, closeModal}) => {

    return (
    <div className={Bm.wrapper}>
      <div className={Bm.container}>
        <h3 className={Bm.title}>Swap to BNB</h3>
        <div className={Bm.benefits}>
          <span className={Bm.benefits__title}>You will get</span>
          <div className={Bm.benefits__priceWrapper}>
            <div className={Bm.benefits__amountWindow}>
              <span className={Bm.benefits__amountWindow__amount}>
                10000000
              </span>
              <span className={Bm.benefits__amountWindow__title}>BNB</span>
            </div>
            <div className={Bm.logoWrapper}>
             <img src={Logo} alt="logo" />
             <span className={Bm.logoSum}>1,5M</span>
            </div>
            <span className={Bm.benefits__price}>(1308.54$)</span>
          </div>
        </div>
        <button className={Bm.button} onClick={closeModal}>Confirm</button>
      </div>
      <img src={Close} alt="close" className={Bm.close} onClick={closeModal}/>
      <img
        src={Back}
        alt="back"
        className={Bm.back}
        onClick={backToWithdrawModal}
      />
    </div>
    )
};
