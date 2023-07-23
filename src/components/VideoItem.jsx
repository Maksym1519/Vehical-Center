import Vi from './videoItem.module.scss';
import Play from '../images/video-button.svg';
import { useState } from 'react';
import { VideoPopUp } from './VideoPopUp';


export const VideoItem = ({img,text,videoId}) => {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
      setOpen(true);
    };
  
    const closeModal = () => {
      setOpen(false);
    };
  
      return (
        
        <div className={Vi.videoItem__wrapper}>
            <div className={Vi.videoItem__container}  onClick={openModal}>
               <div className={Vi.videoItem__imgWrapper}>
                  <img src={img} alt="bg" />
                  <div className={Vi.videoItem__iconWrapper}>
                  <img src={Play} alt="icon" />
               </div>
               </div>
               <div className={Vi.videoItem__title}>{text}</div>
             
            </div>
            {isOpen && (<div className={Vi.overlay}></div>)}
            {isOpen && <VideoPopUp videoId={videoId} isOpen={isOpen} onClose={closeModal} />}
           
            </div>
    )
}