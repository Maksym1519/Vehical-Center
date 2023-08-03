import v from "./video.module.scss";
import ReactPlayer from "react-player";
import { VideoPopUp } from "../../components/VideoPopUp";
import { lazy, Suspense } from 'react';
const Header = lazy(()=>import('../../components/Common/Header/Header'))
//import { Header } from "../../components/Common/Header/Header";
import { IntroTitle } from "../../components/Common/IntroTitle";
import { VideoItem } from "../../components/VideoItem";
import { Footer } from "../../components/Common/Footer/Footer";
import Video1 from "../../images/Video1.webp";
import Video2 from "../../images/Video2.webp";
import Video3 from "../../images/Video3.webp";
import Video4 from "../../images/Video4.webp";
import { useState } from "react";


function LoadingInfo () {
  return <h2>Loading...</h2>
  
}
 const VideoPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const videos = [
    "https://www.youtube.com/watch?v=NTa7hMpYjtM&t=4s",
    "https://www.youtube.com/watch?v=d1y8r9F5pVk",
    "https://www.youtube.com/watch?v=5V7_e-38ZsE",
    "https://www.youtube.com/watch?v=jFzFY-Yk1Bc",
  ];
  const images = [Video1, Video2, Video3, Video4];
  const titles = [
    "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",
    "VAC's Vehicle Shoot #11: Toyota Highlander",
    "VAC's Vehicle Shoot #09: 2019 Mazda CX-5",
    "Some Vehicles VAC Offers!",
  ];
  return (
    <div className={v.videoPage__wrapper}>
     <Suspense fallback={<LoadingInfo />}>
    <Header />
  </Suspense>
      <IntroTitle text={"Vehicle videos"} />
      <div className={v.videoItems__container}>
        {images.map((image, index) => (
          <VideoItem
            key={index}
            img={image}
            text={titles[index]}
            videoId={videos[index]}
          />
        ))}
        {isOpen && (<div className={v.overlay}></div>)}
        {isOpen && (
            <VideoPopUp
              videoId={selectedVideoId}
              isOpen={isOpen}
              onClose={closeModal}
            />
        
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;