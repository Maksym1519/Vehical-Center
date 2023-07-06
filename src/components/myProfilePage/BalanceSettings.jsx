import '../../style.scss';
import Bs from './balanceSettings.module.scss';
import Logo1 from '../../images/balance-settings-logo1.svg';
import Logo2 from '../../images/balance-settings-logo2.svg';
import { SwapModal } from './SwapModal';
import Close from '../../images/close.svg'
import { useState } from 'react';

export const BalanceSettings = ({closeModal}) => {
    const [isBalancesettings, setBalanceSettings] = useState(false)

      const openSwapModal = () => {
      setBalanceSettings(true)
    }  
      const backtoBalanceModal = () => {
      setBalanceSettings(false)
    }  
  
    return (
       <div>
      {isBalancesettings ? (<SwapModal closeModal={closeModal} backtoBalanceModal={backtoBalanceModal}/>):(
        <div className={Bs.wrapper}>
          <div className={Bs.container}>
            <h3 className={Bs.title}>Balance settings</h3>
           <div className={Bs.balance__items__wrapper}>
            <div className={Bs.balance__item}>
              <div className={Bs.balance__item__amount}>
                <img src={Logo1} alt="logo" />
                <span className={Bs.balance__item__numbers}>1.5M</span>
              </div>
              <span className={Bs.balance__item__title}>Withdraw</span>
            </div>
            <div className={Bs.balance__item}>
            <div className={Bs.balance__item__amount}>
                <img src={Logo2} alt="logo" />
                <span className={Bs.balance__item__numbers}>1.5M</span>
              </div>
              <div className={Bs.balance__item__titleWrapper}>
              <span className={Bs.balance__item__title} onClick={openSwapModal} >Swap to TASTE</span>
              <span className={Bs.balance__item__title}>Deposit</span>
              <span className={Bs.balance__item__title}>Withdraw</span>
              </div>
            </div>
           </div>
          </div>
          <img src={Close} alt="close" className={Bs.close} onClick={closeModal}/>
        
        </div>
)}
        </div>
    )
}