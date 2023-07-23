import { useState } from "react";
import vp from "./videoPopUp.module.scss";
import ReactPlayer from 'react-player';
import Close from '../images/close.png'

export const VideoPopUp = ({ videoId, isOpen, onClose }) => {
 
    return (
       <div className={vp.videoPopUp__wrapper}>
       {isOpen && (
        <div className={vp.videoPopUp__container}>
          <ReactPlayer
            url={videoId}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
                autoplay: 1
                },
            }}
            className='youtube'
          />
       
          </div>
        )}
          {/* <img src={Close} alt="close" className={vp.close} onClick={onClose}/> */}
          <div className={vp.close__wrapper} onClick={onClose}>
            <span className={vp.close__line1}>-</span>
            <span className={vp.close__line2}>-</span>
            </div>
      </div>
  );
};
