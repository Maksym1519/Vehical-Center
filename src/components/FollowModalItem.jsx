import '../style.scss';
import Fi from '../components/followModalItem.module.scss';
import Ava1 from '../images/follow-modal1.png';
import { FollowModal } from '../pages/FollowModal';

export const FollowModalItem = ({img}) => {
    return (
        <div className={Fi.body}>
         <div className={Fi.userInfo}>
            <img src={img} alt="ava" />
            <div className={Fi.userInfo__textWrapper}>
             <span className={Fi.userInfo__userName}>User Name</span>
             <span className={Fi.userInfo__userId}>User Name</span>
            </div>
            </div>
            <button className={Fi.userInfo__button}>Follow</button>
          </div>
    )
}