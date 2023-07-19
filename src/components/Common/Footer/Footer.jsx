import f from './footer.module.scss';
import Logo from '../../../images/Footer-Logo.svg';
import Insta from '../../../images/Instagram.svg';
import Facebook from '../../../images/Facebook.svg';
import Youtube from '../../../images/YouTube.svg';
import FooterLogo from '../../../images/created-Logo.svg';
import MobileLogo from '../../../images/footer-mainLogo.svg';
import MobileLogoText from '../../../images/footer-mainLogoText.svg';

export const Footer = () => {
    return (
        <div className={f.footer}>
         <div className={f.footer__container}>
           <div className={f.footer__logoWrapper}>
           <img src={Logo} alt="logo" className={f.footer__logo} />
           <img src={MobileLogo} alt="logo" className={f.mobileLogo} />
           <img src={MobileLogoText} alt="logo" className={f.mobileLogo}/>
           </div>
          <div className={f.terms}>
          <span className={f.terms__item}>Terms</span>
          <span className={f.terms__item}>Privacy</span>
         </div>
         <div className={f.socialMedia}>
          <img src={Insta} alt="logo" />
          <img src={Facebook} alt="logo" />
          <img src={Youtube} alt="logo" />
         </div>
         <div className={f.created}>
            <span className={f.created__text}>Created by</span>
            <img src={FooterLogo} alt="logo" />
         </div>
         <div className={f.copyright}>
           <span className={f.copyright__item}>©Copyright,</span>  
           <span className={f.copyright__item}>2020.</span>
           <span className={f.copyright__item}>Vehicle Approval</span>
         </div>
        </div>
        </div>
    )
}