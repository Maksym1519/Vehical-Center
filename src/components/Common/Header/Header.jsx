import h from './header.module.scss';
import Logo from '../../../images/Logo.svg';
import LogoMob from '../../../images/logo-mobile.svg';
import LogoText from '../../../images/logo-mob-text.svg';
import { Button } from '../Button';

export const Header = () => {
    return (
        <div>
          <div className={h.header__wrapper}>
          <div className={h.header__container}>
           <div className={h.headerLogo}>
            <img src={Logo} alt="logo" className={h.logo} />
            <img src={LogoMob} alt="logo" className={h.logoMob} />
            <img src={LogoText} alt="text" className={h.logoText} />
           </div>
           <div className={h.header__buttonWrapper}>
            <div className={h.header__inventoryButton}>
            Inventory
            </div>
             <div className={h.header__button}>
             Request a car
             </div>
            </div>
           <div className={h.header__burger}>
            <span></span>
           </div>
          </div>
        </div>
        </div>
    )
}