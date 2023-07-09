import '../style.scss';
import Sp from './search.module.scss';
import React, { useState } from 'react';
import { SearchHeader } from '../components/searchHeader';
import { VFHCard } from '../components/VFH-Card';
import { VFHCards } from '../components/WFH-Cards';
import {SliderCreators} from '../components/Slider-Creators';
import Card1 from '../images/VFH-card1.png';
import Card2 from '../images/VFH-card2.png';
import Card3 from '../images/VFH-card3.png';
import Card4 from '../images/VFH-card4.png';
import Card5 from '../images/VFH-card5.png';
import Card6 from '../images/VFH-card6.png';
import Card7 from '../images/VFH-card7.png';
import Card8 from '../images/VFH-card8.png';
import CardAvatar1 from '../images/card1-ava.jpg';
import CardAvatar2 from '../images/card2-ava.jpg';
import CardAvatar3 from '../images/card3-ava.jpg';
import CardAvatar4 from '../images/card4-ava.jpg';
import CardAvatar5 from '../images/card5-ava.jpg';
import CardAvatar6 from '../images/card6-ava.jpg';
import CardAvatar7 from '../images/card7-ava.jpg';
import CardAvatar8 from '../images/card8-ava.jpg';
import Text from '../images/Show all.svg'

export const SearchPage = () => {
    const [isOpenCards, setOpenCards] = useState(false)
    const openCards = () => {
        setOpenCards(true)
    }
    const imagesBg = [Card1,Card2,Card3,Card4]
    const avatars = [CardAvatar1, CardAvatar2, CardAvatar3, CardAvatar4];
    const imagesBg2 = [Card5,Card6,Card7,Card8]
    const avatars2 = [CardAvatar5, CardAvatar6, CardAvatar7, CardAvatar8];
      return (
        <div className={Sp.wrapper}>
            <SearchHeader />
            <div className={Sp.container}>
            <div className={Sp.dropdown}>
          <div className={Sp.dropdown__recent}>
            <div className={Sp.dropdown__recent__toggle}>Recently added</div>
            <ul className={Sp.dropdown__menu__recent}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item3</li>
            </ul>
          </div>
          <div className={Sp.dropdown__auctions}>
          <div className={Sp.dropdown__auctions__toggle}>Auctions</div>
            <ul className={Sp.dropdown__menu__auctions}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item3</li>
            </ul>
          </div>
         </div>
        <div className={Sp.cards_wrapper}> 
            {avatars.map((avatar, index) => (
        <VFHCard key={index} ava={avatar} img={imagesBg[index]} />
      ))}
        </div>
        {isOpenCards && ( 
        <div className={Sp.cards_wrapper2}> 
            {avatars2.map((avatar, index) => (
        <VFHCard key={index} ava={avatar} img={imagesBg2[index]} />
      ))}
        </div>
       )}
        <button className={Sp.button_gradient} onClick={openCards}><span>Show all</span></button>
        <SliderCreators />
            </div>
       </div>
    )
}