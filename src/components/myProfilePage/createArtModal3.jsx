import "../../style.scss";
import At from "./createArtModal3.module.scss";
import CloseWindow from "../../images/close.svg";
import { CreateArtModal2 } from "./createArtModal2";
import React, { useState } from "react";

export const CreateArtModal3 = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
      setIsOpen(false);
    };
        
    if (!isOpen) {
        return null;
      }
  return (
    
    <div>
        {isOpen && (
    <div className={At.wrapper}>
      <div className={At.container}>
        <h2 className={At.title}>Creating artwork</h2>
        <div className={At.progressBar__wrapper}>
          <div className={At.progressBar__itemWrapper}>
            <div className={At.progressBar__itemColored}></div>
            <div className={At.progressBar__itemColored}></div>
            <div className={At.progressBar__itemColored}></div>
          </div>
          <p className={At.progressBar__textInfo}>Step 1 from 3</p>
        </div>
        <div className={At.artName}>
          <p className={At.artName__text}>Artwork name</p>
          <input type="text" className={At.artName__input} />
        </div>
        <div className={At.description}>
          <p className={At.description__title}>Description</p>
          <input type="text" className={At.description__input} />
        </div>
        <div className={At.artType}>
          <span className={At.artType__title}>Type</span>
          <div className={At.artType__itemWrapper}>
            <div className={At.artType__item}>
                <div className={At.input__dot}></div>
                <input type="radio" className={At.artType__input} id="auction" name="artType"/>
                <label for="auction" className={At.artType__labelActive}>Auction</label>
             </div>
            <div className={At.artType__item}>
            <input type="radio" className={At.artType__input} id="sale" name="artType"/>
            <label for="sale" className={At.artType__labelPassive}>Sale</label>
            </div>
          </div>
        </div>
        <div className={At.ordering}>
         <div className={At.copies}> 
         <span className={At.copies__itemTitle}>Copies</span>
         <div className={At.copies__counter}>
          <span className={At.copies__sign}>-</span>
          <div className={At.copies__amount}>1</div>
          <span className={At.copies__sign}>+</span>
         </div>
         </div>
         <div className={At.sum}>
          <span className={At.copies__itemTitle}>Min.sum</span>
          <div className={At.sum__mainWrapper}>
          <div className={At.sum__windowWrapper}>
            <span className={At.sum__windowWrapper__numbers}>10000000</span>
            <span className={At.sum__windowWrapper__taste}>TASTE</span>
          </div>
          <span className={At.sum__amount}>(1308.54$)</span>
          </div>
         </div>
        </div>
        <div className={At.timer}>
         <span className={At.timer__title}>Selling will end</span>
         <span className={At.timer__set}>Set timer</span>
        </div>
        <button className={At.button}>Next step</button>
      </div>
   
      <img src={CloseWindow} alt="close" className={At.closeWindow} onClick={handleCloseModal}/>
     
    </div>
)}
    </div>
  );
};
