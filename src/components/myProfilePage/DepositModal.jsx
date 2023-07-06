import "../../style.scss";
import Dm from "./depositModal.module.scss";
import Close from '../../images/close.svg';
import Back from '../../images/Back.svg';
import Logo from '../../images/deposit-modal-logo.svg';
import { WithdrawModal } from "./WithdrawModal";
import React, { useState } from "react";

export const DepositModal = ({backToSwapModal, closeModal}) => {
    const [isDepositModal, setDepositModalOpen] = useState(false)
    const withdrawModalOpen = () => {
        setDepositModalOpen(true)
    }
    const backToDepositModal = () => {
        setDepositModalOpen(false)
    }
 
    return (
<div>
    { isDepositModal ? (<WithdrawModal closeModal={closeModal} backToDepositModal={backToDepositModal}/>): (
    <div className={Dm.wrapper}>
      <div className={Dm.container}>
        <h3 className={Dm.title}>Deposit to BNB</h3>
        <div className={Dm.benefits}>
          <span className={Dm.benefits__title}>You will get</span>
          <div className={Dm.benefits__priceWrapper}>
            <div className={Dm.benefits__amountWindow}>
              <span className={Dm.benefits__amountWindow__amount}>
                10000000
              </span>
              <span className={Dm.benefits__amountWindow__title}>BNB</span>
            </div>
            <div className={Dm.logoWrapper}>
             <img src={Logo} alt="logo" />
             <span className={Dm.logoSum}>1,5M</span>
            </div>
            <span className={Dm.benefits__price}>(1308.54$)</span>
          </div>
        </div>
        <button className={Dm.button} onClick={withdrawModalOpen}>Deposit</button>
      </div>
      <img src={Close} alt="close" className={Dm.close} onClick={closeModal}/>
      <img
        src={Back}
        alt="back"
        className={Dm.back}
        onClick={backToSwapModal}
      />
    </div>
    )}
</div>
    )
};
