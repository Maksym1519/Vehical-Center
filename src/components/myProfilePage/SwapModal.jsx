import "../../style.scss";
import Sm from "./swapModal.module.scss";
import Close from '../../images/close.svg';
import Back from '../../images/Back.svg';
import { DepositModal } from "./DepositModal";
import React, { useState } from "react";

export const SwapModal = ({closeModal, backtoBalanceModal}) => {
    const [isSwapModalOpen, setSwapModalOpen] = useState(false);
    const depositModalOpen = () => {
      setSwapModalOpen(true)
    }
     const backToSwapModal = () => {
      setSwapModalOpen(false)
     }
      return (
        <div>
       {
        isSwapModalOpen ? (<DepositModal closeModal={closeModal} backToSwapModal={backToSwapModal} />):(
        <div className={Sm.wrapper}>
            <div className={Sm.container}>
             <h3 className={Sm.title}>Swap to  TASTE</h3>
             <div className={Sm.benefits}>
                <span className={Sm.benefits__title}>You will get</span> 
                <div className={Sm.benefits__priceWrapper}>
                  <div className={Sm.benefits__amountWindow}>
                   <span className={Sm.benefits__amountWindow__amount}>10000000</span>
                   <span className={Sm.benefits__amountWindow__title}>TASTE</span>
                  </div>
                  <span className={Sm.benefits__price}>(1308.54$)</span>
                </div>
             </div>
             <button className={Sm.button} onClick={depositModalOpen}>Swap</button>
            </div>
            <img src={Close} alt="close" className={Sm.close} onClick={closeModal}/>
            <img src={Back} alt="back" className={Sm.back} onClick={backtoBalanceModal}/>
        </div>
        )}
        </div>
    )
}