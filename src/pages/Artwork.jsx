import '../style.scss';
import A from './artwork.module.scss';
import {Header} from '../components/Header';
import { ArtName } from '../components/ArtName';
import Bg from '../images/Artwork-Bg.png'

 export const Artwork = () => {
    return (
        <div className={A.wrapper}>
         <div className={A.header__wrapper}>   
         <Header />
         </div>
         <div className={A.container}>
         <div className={A.artwork__bg}>
            <img src={Bg} alt="Bg" className={A.artwork__bg__img} />
         </div>
         <div className={A.activity}>
           <ArtName />
         </div>
         </div>
        </div>
    )
}


