import '../../style.scss';
import Pw from './profileWFHCards.module.scss';
import { ProfileVFHCard } from './ProfileWFH-card';
import CardAvatar1 from '../../images/card1-ava.jpg';
import CardAvatar2 from '../../images/card2-ava.jpg';
import CardAvatar3 from '../../images/card3-ava.jpg';
import CardAvatar4 from '../../images/card4-ava.jpg';
import CardAvatar5 from '../../images/card5-ava.jpg';
import CardAvatar6 from '../../images/card6-ava.jpg';
import CardAvatar7 from '../../images/card7-ava.jpg';
import CardAvatar8 from '../../images/card8-ava.jpg';

import Card1 from '../../images/VFH-card1.png';
import Card2 from '../../images/VFH-card2.png';
import Card3 from '../../images/VFH-card3.png';
import Card4 from '../../images/VFH-card4.png';
import Card5 from '../../images/VFH-card5.png';
import Card6 from '../../images/VFH-card6.png';
import Card7 from '../../images/VFH-card7.png';
import Card8 from '../../images/VFH-card8.png';


export const ProfileWFHCards = () => {
    const imagesBg = [Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8]
    //const avatars = [CardAvatar1, CardAvatar2, CardAvatar3, CardAvatar4, CardAvatar5, CardAvatar6, CardAvatar7, CardAvatar8];
    const array  = array
      return (
        <div className={Pw.container}>
      {imagesBg.map((image, index) => (
        <ProfileVFHCard key={index} img={image} text={index === 1 ? 'On moderation' : index === 2 ? 'Declined' : 'Approved'} />
      ))}
      </div>
    )
}