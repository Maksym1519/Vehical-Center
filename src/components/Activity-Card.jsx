import '../style.scss';
import Ak from './activity-card.module.scss';
import Ava from '../images/activity-avatar.jpg';
import PriceLogo from '../images/price-logo.svg';
import ButtonBg from '../images/bid-button-bg.png';
import ButtonLogo from '../images/bid-button-logo.svg';

export const ActivityCard = () => {
    return (
        <div className={Ak.body}>
         <div className={Ak.bid}>
          <img src={Ava} alt="ava" className={Ak.bid__ava} />
          <p className={Ak.bid__infoUser}>Bid placed by 0x6FC0...14A4</p>
          <p className={Ak.bid__date}>May 19, 2021 at 2:27pm</p>
         </div>
         <div className={Ak.bidExtend}>
          <img src={PriceLogo} alt="logo" className={Ak.bidExtend__logo} /> 
          <span className={Ak.bidExtend__numbers}>1,5M</span>
          <span className={Ak.bidExtend__price}>(1308.54$)</span>
          <a href="#">
            <div className={Ak.bidExtend__button}>
                <img src={ButtonBg} alt="button" className={Ak.bidExtend__button__bg} />
                <img src={ButtonLogo} alt="button" className={Ak.bidExtend__button__logo} />
            </div>
          </a>
         </div>
        </div>
    )
}