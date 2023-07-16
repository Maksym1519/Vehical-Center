import h from './header.module.scss';
import Logo from '../../../images/Logo.svg';
import { Button } from '../Button';

export const Header = () => {
    return (
        <div>
          <div className={h.header__wrapper}>
          <div className={h.header__container}>
           <div className={h.headerLogo}>
            <img src={Logo} alt="logo" />
           </div>
           <div className={h.header__buttonWrapper}>
            <div className={h.header__inventoryButton}>
            Inventory
            </div>
             <Button />
            </div>
           <div className={h.header__burger}>
            <span></span>
           </div>
          </div>
        </div>
        </div>
    )
}