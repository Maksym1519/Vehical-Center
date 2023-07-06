import React from 'react';
import '../fonts.scss';
import '../style.scss';
import '../components/header.module.scss';
import m from './main.module.scss';
import { Header } from '../components/Header'; 
import { VFHCards } from '../components/WFH-Cards';
import {SliderCreators} from '../components/Slider-Creators';
import { ArtName } from '../components/ArtName';
import { WalletModal } from '../components/WalletModal';
//import Avatar from '../images/main-avatar.svg';
import PriceLogo from '../images/price-logo.svg'
import PriceExt from '../images/vhf- external.svg'
import PriceShare from '../images/vhf-share.svg';
import PriceVertical from '../images/vhf-vertical.svg';
import Gallery1 from '../images/vhf-pic1.jpg';
import Gallery2 from '../images/vhf-pic2.jpg';
import Gallery3 from '../images/vhf-pic3.jpg';
import Gallery4 from '../images/vhf-pic4.jpg';
import IndicatorAct from '../images/indicator-active.svg';
import IndicatorNonAct from '../images/indicator-nonactive.svg';


 export const Main = () => {
    return (
        <div className='main-wrapper'>
        <Header />
        <div className={m.wrapper}>
         <div className={m.container}>
         <div className={m.vhf}>
            <div className={m.vhf__info}>
             <ArtName />
             <h2 className={m.title}>WFH - art name</h2>
             <p className={m.vhf__text}>Description: The iconic meme that became a viral Internet sensation and an 
             indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full 
             "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, and Bilibili 
             (B 站).</p>
             <div>
                <div className={m.price__wrapper}>
                <div className={m.price}>
                <p className={m.price__text}>Sold for:</p>
                <img src={PriceLogo} alt="img" />
                <p className={m.price__numbers}>1,5M</p>
                </div>
                <div className={m.view}>
                 <button className={m.view__button} type='button'>View</button>
                 <div className={m.view__item}><img src={PriceExt} alt="icon" /></div>
                 <div className={m.view__item}><img src={PriceShare} alt="icon" /></div>
                 <div className={`${m.view__item} ${m.view__item_margin}`}><img src={PriceVertical} alt="icon" /></div>
                </div>
                </div>
             </div>
            </div>
            <div className={m.vhf__gallery}>
             <div className={m.vhf__gallery__imgWrapper}>
                <div className={m.vhf__gallery__item}><img src={Gallery1} alt="img" className={m.vhf__gallery__item_cutting1}/></div>
                <div className={m.vhf__gallery_item}><img src={Gallery2} alt="img" className={m.vhf__gallery__item_cutting2}/></div>
                <div className={m.vhf__gallery_item}><img src={Gallery3} alt="img" className={m.vhf__gallery__item_cutting3}/></div>
                <div className={m.vhf__gallery_item}><img src={Gallery4} alt="img" className={m.vhf__gallery__item_cutting4}/></div> 
             </div>
             <div className={m.vhf__gallery__navigation}>
              <div className={m.vhf__gallery__indicator}><img src={IndicatorAct} alt="img" /></div>
              <div className={m.vhf__gallery__indicator}><img src={IndicatorNonAct} alt="img" /></div>
              <div className={m.vhf__gallery__indicator}><img src={IndicatorNonAct} alt="img" /></div>
              <div className={m.vhf__gallery__indicator}><img src={IndicatorNonAct} alt="img" /></div>
              <div className={m.vhf__gallery__indicator}><img src={IndicatorNonAct} alt="img" /></div>
             </div>
            </div>
         </div>
         <div className={m.dropdown}>
          <div className={m.dropdown__recent}>
            <div className={m.dropdown__recent__toggle}>Recently added</div>
            <ul className={m.dropdown__menu__recent}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item3</li>
            </ul>
          </div>
          <div className={m.dropdown__auctions}>
          <div className={m.dropdown__auctions__toggle}>Auctions</div>
            <ul className={m.dropdown__menu__auctions}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item3</li>
            </ul>
          </div>
         </div>
         <VFHCards />
         <SliderCreators />
         <WalletModal />
        </div>  
        </div>
        </div>
    )
}

