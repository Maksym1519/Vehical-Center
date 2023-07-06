import '../../style.scss';
import Ep from './editProfileModal.module.scss';
import PersInfoLogo from '../../images/pers-info-logo.svg';
import ImgDownload from '../../images/editingModal-img.svg';
import RedClose from '../../images/redClose.svg';
import TwichLogo from '../../images/twich-logo.svg';
import InstaLogo from '../../images/instagram-logo.svg';
import TwitterLogo from '../../images/twitter-logo.svg';
import OnlyFansLogo from '../../images/onlyfans-logo.svg';
import CloseWindow from '../../images/close.svg'

export const EditProfile = ({closeModal}) => {
    return (
        <div className={Ep.wrapper}>
         {/* {isTimeModalOpen &&<div className={Ep.overlay}></div>} */}
          <div className={Ep.container}>
            <h2 className={Ep.title}>Edit your Profile</h2>
            <div className={Ep.personalInfo}>
             <div className={Ep.personalInfo__item}>
              <span className={Ep.personalInfo__item__title}>Name</span>
              <input type="text" className={Ep.personalInfo__item__input} />
             </div>
             <div className={Ep.personalInfo__item}>
             <span className={Ep.personalInfo__item__title}>Username</span>
             <div className={Ep.personalInfo__item__userName}>
             <img src={PersInfoLogo} alt="logo" />
             <input type="text" className={Ep.personalInfo__item__input} />
             </div>
             </div>
             <div className={Ep.personalInfo__item}>
             <span className={Ep.personalInfo__item__title}>Email</span>
             <input type="text" className={Ep.personalInfo__item__input} />
             </div>
             <div className={Ep.personalInfo__item}>
             <p className={Ep.personalInfo__item__text}>Add your email address to receive notifications 
             about your activity on Foundation. This will not be shown on your profile.</p>
             </div>
             <div className={Ep.personalInfo__itemFull}>
             <span className={Ep.personalInfo__item__title}>BIO</span>
             <input type="text" className={Ep.personalInfo__item__inputFull}/>
             </div>
            </div>
            <div className={Ep.image__wrapper}>
             <h3 className={Ep.image__title}>Profile image</h3>
             <div className={Ep.image__body}>
               <img src={ImgDownload} alt="img" />
               <div className={Ep.image__info}>
                 <span className={Ep.image__info__item}>file.name</span>
                 <span className={Ep.image__info__item}>5.00 mb</span>
                 <div className={Ep.image__info__redText}>
                    <img src={RedClose} alt="close" />
                 <span className={Ep.image__info__item_redish}>delete file</span>
                 </div>
               </div>
             </div>
            </div>
            <div className={Ep.socialMedia}>
              <h4 className={Ep.socialMedia__title}>Contacts</h4>
              <div className={Ep.socialMedia__item}>
                <div className={Ep.socialMedia__item__wrapper}>
                <img src={TwichLogo} alt="logo" className={Ep.socialMedia__item__logo} />
                <span className={Ep.socialMedia__item__title}>Twitch</span>
                </div>
                <input type="text" className={Ep.socialMedia__item__input} />
              </div>
              <div className={Ep.socialMedia__item}>
                <div className={Ep.socialMedia__item__wrapper}>
                <img src={InstaLogo} alt="logo" className={Ep.socialMedia__item__logo} />
                <span className={Ep.socialMedia__item__title}>Instagram</span>
                </div>
                <input type="text" className={Ep.socialMedia__item__input} />
              </div>
              <div className={Ep.socialMedia__item}>
                <div className={Ep.socialMedia__item__wrapper}>
                <img src={TwitterLogo} alt="logo" className={Ep.socialMedia__item__logo} />
                <span className={Ep.socialMedia__item__title}>Twitter</span>
                </div>
                <input type="text" className={Ep.socialMedia__item__input} />
              </div>
              <div className={Ep.socialMedia__item}>
                <div className={Ep.socialMedia__item__wrapper}>
                <img src={OnlyFansLogo} alt="logo" className={Ep.socialMedia__item__logo} />
                <span className={Ep.socialMedia__item__title}>Onlyfans</span>
                </div>
                <input type="text" className={Ep.socialMedia__item__input} />
              </div>
            </div>
            <button className={Ep.button}>Save changes</button>
          </div>
          <img src={CloseWindow} alt="close" className={Ep.closeWindow} onClick={closeModal}/>
        </div>
    )
}