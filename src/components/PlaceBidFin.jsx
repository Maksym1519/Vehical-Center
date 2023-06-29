import '../style.scss';
import Pf from './placeBidFin.module.scss';
import PriceLogo from '../images/price-logo.svg';
import Line from '../images/placebid-line.png'

export const PlaceBidFin = () => {
    return (
        <div className={Pf.body}>
         <div className={Pf.price__wrapper}>
            <h4 className={Pf.price__title}>Price:</h4>
            <div className={Pf.price__body}>
              <img src={PriceLogo} alt="logo"/>
              <span className={Pf.price__numbers}>1,5M</span>
              <span className={Pf.price__price}>(1308.54$)</span>
            </div>
         </div>
        <img src={Line} alt="line" className={Pf.line} />
        <button className={Pf.button}>Buy art</button>
        </div>
    )
}