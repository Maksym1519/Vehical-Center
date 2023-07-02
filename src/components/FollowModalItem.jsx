import '../style.scss';
import Fi from '../components/followModalItem.module.scss';
import Ava1 from '../images/follow-modal1.png';
import { FollowModal } from '../pages/FollowModal';
import { useState } from 'react';

export const FollowModalItem = ({img}) => {
    const [isFollowed, setIsFollowed] = useState(false);

  const handleButtonClick = () => {
    setIsFollowed(!isFollowed);
  };

       return (
        <div className={Fi.body}>
         <div className={Fi.userInfo}>
            <img src={img} alt="ava" />
            <div className={Fi.userInfo__textWrapper}>
             <span className={Fi.userInfo__userName}>User Name</span>
             <span className={Fi.userInfo__userId}>User Name</span>
            </div>
            </div>
            <button className={Fi.userInfo__button} onClick={handleButtonClick}>{isFollowed ? 'Unfollow': 'Follow'}</button>
          </div>
    )
    
}

const button = document.getElementsByClassName('.userInfo__button')
if(button.length > 0) {
    for(let i = 0; i < button.length; i++) {
button[i].addEventListener('click', function() {
    button[i].innerHTML = 'Unfollow';
    })
    }
}
