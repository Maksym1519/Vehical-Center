import '../../style.scss';
import Hp from './profileHeader.module.scss';
import Logo from '../../images/header-logo.svg';
import SearchIcon from '../../images/header-search.svg';
import { Button } from '../Button';
import ProfileAva from '../../images/profile-avatar-circ.png';
import ProfileLogo from '../../images/profile-logo.svg';
import Arrow from '../../images/profile-arrow.svg'
//import { MyProfile } from '../pages/MyProfilePage';

export const ProfileHeader = () => {
      return (
        <div className={Hp.wrapper}>
          <img src={Logo} alt="logo" className="logo" />
          <div className={Hp.search}>
          <img src= {SearchIcon} alt="search" />
          <input type="search" className={Hp.search__input} placeholder='Search for ...'/>
          </div>
          <Button />
          <div className={Hp.profile}>
            <img src={ProfileAva} alt="ava" />
         <div className={Hp.profile__info}>
          <span className={Hp.profile__info__userName}>User Name</span>
           <div className={Hp.profile__balance}>
          <span className={Hp.profile__info__userId}>@username</span>
           <span className={Hp.profile__balance__text}>Balance:</span>
           <img src={ProfileLogo} alt="logo" className={Hp.profile__balance__logo} />
           <span className={Hp.profile__balance__sum}>1,5M</span>
          </div>
          </div>
          <img src={Arrow} alt="arrow" className={Hp.profile__arrow} />
         </div>
        </div>
    )
}