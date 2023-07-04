import '../../style.scss';
import c from './profileWFHCard.module';
import CardLogo from '../../images/TasteNFT_logo.svg';
import TimeIcon from '../../images/card-time-icon.svg';
import EditIcon from '../../images/card-edit-icon.svg';
import BucketIcon from '../../images/card-bucket-icon.svg';
import { useState } from 'react';
//import { VFHCards } from './WFH-Cards';

 
export const ProfileVFHCard = ({img,text}) => {
   let textColor = '';
   const [isMenuOpen,setMenuOpen] = useState(false)
    //-----------------------------------------------------------------------------------------
    if (text === 'On moderation') {
    textColor = '#FFBA09';
  } else if (text === 'Declined') {
    textColor = '#FF5E54';
  } else {
    textColor = '#86D084';
  }
  //-----------------------------------------------------------------------------------------
  const handleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
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
        <div className={c.card__headerWrapper}>
        <div className={c.status}>
           <span className={c.status__text} style={{color:textColor}}>{text}</span>
        </div>
       <div className={c.status__menu__wrapper}>
        <div className={c.status__menu}>
             <div className={c.status__menu__dotsWrapper} onClick={handleMenu}>
              <span className={c.status__menu__dot}>.</span>  
              <span className={c.status__menu__dot}>.</span>  
              <span className={c.status__menu__dot}>.</span>  
              </div>
            </div>
           {isMenuOpen && (
           <div className={c.status__menu__navContainer}>
               {text === 'On moderation' && (
               <div className={c.status__menu__item}>
                <img src={TimeIcon} alt="icon" />
               </div>
                )}
                {text === 'Declined' && (
              <>
               <div className={c.status__menu__item}>
                <img src={TimeIcon} alt="icon" />
               </div>
               <div className={c.status__menu__item}>
               <img src={EditIcon} alt="icon" />
               </div>
               <div className={c.status__menu__item}>
               <img src={BucketIcon} alt="icon" />
               </div>
               </>
            )}
              </div>
             )}
             </div>
           </div>
        </div>
        
    )
}
