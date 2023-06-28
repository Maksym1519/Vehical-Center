import '../style.scss';
import Sc from './slider-card.module.scss';
import Img1 from '../images/slider-img1.jpg';
import Sl from './slider-creators.module.scss';


export const SliderCard = ({img}) => {
    return (
        <div className={Sc.body}>
         <div>
            <img src={img} alt="Ava" className={Sc.ava} />
         </div>
         <p className={Sc.name}>User Name</p>
         <p className={Sc.userName}>@username</p>
         <p className={Sc.time}>24 sales on 32ETH</p>
        </div>
   
    )
}