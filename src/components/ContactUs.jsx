import cu from './contactUs.module.scss';
import { ContuctUsComplete } from './ContactUsCoplete';
import Person from '../images/Input-person.svg';
import Number from '../images/Input-number.svg';
import Mail from '../images/input-Mail.svg';
import Insta from '../images/Instagram-mobile.svg';
import Facebook from '../images/Facebook-mobile.svg';
import Youtube from '../images/YouTube-mobile.svg';
import Mail2 from '../images/mail-icon.svg';
import Close from '../images/Burger Menu-close.svg'
import { useState } from 'react';

export const ContuctUs = ({closeModal}) => {
   const [isOpen, setModalOpen] = useState(false)
   const openNextModal = () => {
      setModalOpen(true)
     }
      return (
        <div className={cu.contactUs__wrapper}>
           <div className={cu.contactUs__container}>
             <div className={cu.inputsForm__wrapper}>
                <h3 className={cu.inputsForm__title}>We can't wait to hear from you!</h3>
                <div className={cu.inputs__body}>
                   <label htmlFor="input" className={cu.inputsForm__label}>
                    <img src={Person} alt="icon" className={cu.input__icon} />
                    <input required type="text" id='input' placeholder='Your Name' className={cu.inputsForm__input} />
                   </label>
                   <label htmlFor="input" className={cu.inputsForm__label}>
                    <img src={Number} alt="icon" className={cu.input__icon}/>
                    <input type="text" id='input' placeholder='Phone Number' className={cu.inputsForm__input}/>
                   </label>
                   <label htmlFor="input" className={cu.inputsForm__label}>
                    <img src={Mail} alt="icon" className={cu.input__icon}/>
                    <input type="email" id='input' placeholder='Email Address' className={cu.inputsForm__input}/>
                   </label>
                   <button className={cu.inputsForm__button} onClick={openNextModal}>contact me</button>
                </div>
             </div>
            <div className={cu.socialMedia__wrapper}>
               <h4 className={cu.socialMedia__title}>You can contact us yourself</h4>
               <div className={cu.socialMedia__iconsWrapper}>
                 <img src={Insta} alt="icon" />
                 <img src={Facebook} alt="icon" />
                 <img src={Youtube} alt="icon" />
                 <img src={Mail2} alt="icon" />
               </div>
            </div>
           </div>
           <img src={Close} alt="close" className={cu.close} onClick={closeModal}/>
           {isOpen &&
             (<ContuctUsComplete  closeModal={closeModal} />)
           }
        </div>
    )
}
