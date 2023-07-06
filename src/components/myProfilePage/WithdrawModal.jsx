import "../../style.scss";
import Wm from "./withdrawModal.module.scss";
import Close from '../../images/close.svg';
import Back from '../../images/Back.svg';
import Logo from '../../images/deposit-modal-logo.svg';
import { BNBModal } from "./BNBModal";
import React, { useState } from "react";

export const WithdrawModal = ({backToDepositModal, closeModal}) => {
    const [isWithdrawOpen, setWithdrawOpen] = useState(false)
    const bnbModalOpen = () => {
        setWithdrawOpen(true)
    }
    const backToWithdrawModal = () => {
        setWithdrawOpen(false)
    }

    return (
<div>
    {
        isWithdrawOpen ? (<BNBModal closeModal={closeModal} backToWithdrawModal={backToWithdrawModal}/>): (
    <div className={Wm.wrapper}>
      <div className={Wm.container}>
        <h3 className={Wm.title}>Withdraw</h3>
        <div className={Wm.benefits}>
          <span className={Wm.benefits__title}>You will get</span>
          <div className={Wm.benefits__priceWrapper}>
            <div className={Wm.benefits__amountWindow}>
              <span className={Wm.benefits__amountWindow__amount}>
                10000000
              </span>
              <span className={Wm.benefits__amountWindow__title}>BNB</span>
            </div>
            <div className={Wm.logoWrapper}>
             <img src={Logo} alt="logo" />
             <span className={Wm.logoSum}>1,5M</span>
            </div>
            <span className={Wm.benefits__price}>(1308.54$)</span>
          </div>
        </div>
        <button className={Wm.button} onClick={bnbModalOpen}>Confirm</button>
      </div>
      <img src={Close} alt="close" className={Wm.close} onClick={closeModal}/>
      <img
        src={Back}
        alt="back"
        className={Wm.back}
        onClick={backToDepositModal}
      />
    </div>
    )}
</div>
    )
};
