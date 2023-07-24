import cc from './contactUsComplete.module.scss';
import Succes from '../images/Success.svg';
import Close from '../images/Burger Menu-close.svg'

export const ContuctUsComplete = ({closeModal}) => {
    return (
        <div className={cc.contuctUsComplete__wrapper}>
           <div className={cc.contuctUsComplete__container}>
              <img src={Succes} alt="icon" className={cc.succes} />
              <h3 className={cc.contuctUsComplete__title}>Application Successful!</h3>
              <p className={cc.contuctUsComplete__text}>Our manager will contact you in the nearest time.</p>
              
           </div>
           <img src={Close} alt="close" className={cc.close} onClick={closeModal}/>
          </div>
    )
}