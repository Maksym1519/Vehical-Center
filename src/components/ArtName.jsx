import '../style.scss';
import m from '../components/artname.module.scss';
import Avatar from '../images/main-avatar.svg';

export const ArtName = () => {
    return (
        <div>
        <div className={m.header}>
        <img src={Avatar} alt="avatar" />
        <div className={m.header__description}>
            <p className={m.header__title}>User Name</p>
            <p className={m.header__userName}>@username</p>
        </div>
       </div>
      </div>
    )
}