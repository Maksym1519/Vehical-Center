import '../style.scss';
import c from './vfh-card.module.scss';
//import Card1 from '../images/VFH-card1.png';
import CardLogo from '../images/TasteNFT_logo.svg';
import { VFHCards } from './WFH-Cards';

 
export const VFHCard = ({ava,img}) => {
      return (
        <div className={c.container}>
         <div>
          <img src={img} alt="img" className={c.cardImg} />
        </div> 
        <div className={c.cardInfo}>
            <h3 className={c.title}>WFH - art name</h3>
            <div className={c.sold}>
            <span className={c.sold__text}>Sold for:</span>
             <img src={CardLogo} alt="img" className={c.sold__logo}/>
             <span className={c.sold__numbers}>1,5M</span>
            </div>
            <div className={c.ending}>
             <span className={c.ending__text}>Ending in:</span>
             <span className={c.ending__numbers_h}>05h</span>
             <span className={c.ending__numbers_m}>02m</span>
             <span className={c.ending__numbers_s}>41s</span>
             </div>
        </div>
        <div className={c.cardAvatar}>
        <img src={ava} alt="avatar" />
        <div className={c.cardAvatar__info}>
            <p className={c.cardAvatar__info__title}>User Name</p>
            <p className={c.cardAvatar__info__userName}>@username</p>
        </div>
        </div>
        </div>
    )
}
