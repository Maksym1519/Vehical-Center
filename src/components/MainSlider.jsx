import "../style.scss";
import Ms from "./mainSlider.module.scss";
import React, { useRef, useState, useEffect } from "react";
import Gallery1 from "../images/vhf-pic1.jpg";
import Gallery2 from "../images/vhf-pic2.jpg";
import Gallery3 from "../images/vhf-pic3.jpg";
import Gallery4 from "../images/vhf-pic4.jpg";
//import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//import { register } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
//import { params } from "./SwiperParams.jsx";
//import SwiperCore from "swiper";


import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-fade";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination]);

export const MainSlider = () => {
  //register();
  useEffect(() => {
    // Perform any additional setup or initialization here
  }, []);
  const sliderImgs = [Gallery1, Gallery2, Gallery3, Gallery4];
 
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        className={Ms.mainSlider}
        spaceBetween={30}
        pagination={{
        clickable: true,
        bulletClass: Ms.swiper__pagination,
        }}
      >
        <SwiperSlide className={Ms.slide1}>
          <img src={Gallery1} alt={`Slide`} />
        </SwiperSlide>
        <SwiperSlide className={Ms.slide2}>
          <img src={Gallery2} alt={`Slide`} />
        </SwiperSlide>
        <SwiperSlide className={Ms.slide3}>
          <img src={Gallery3} alt={`Slide`} />
        </SwiperSlide>
        <SwiperSlide className={Ms.slide4}>
          <img src={Gallery4} alt={`Slide`} />
        </SwiperSlide>

        {/* <div className={m.vhf__gallery__imgWrapper}>
            <div className={m.vhf__gallery__item}>
              <img
                src={Gallery1}
                alt="img"
                className={m.vhf__gallery__item_cutting1}
              />
            </div>
            <div className={m.vhf__gallery_item}>
              <img
                src={Gallery2}
                alt="img"
                className={m.vhf__gallery__item_cutting2}
              />
            </div>
            <div className={m.vhf__gallery_item}>
              <img
                src={Gallery3}
                alt="img"
                className={m.vhf__gallery__item_cutting3}
              />
            </div>
            <div className={m.vhf__gallery_item}>
              <img
                src={Gallery4}
                alt="img"
                className={m.vhf__gallery__item_cutting4}
              />
            </div>
          </div>
          <div className={m.vhf__gallery__navigation}>
            <div className={m.vhf__gallery__indicator}>
              <img src={IndicatorAct} alt="img" />
            </div>
            <div className={m.vhf__gallery__indicator}>
              <img src={IndicatorNonAct} alt="img" />
            </div>
            <div className={m.vhf__gallery__indicator}>
              <img src={IndicatorNonAct} alt="img" />
            </div>
            <div className={m.vhf__gallery__indicator}>
              <img src={IndicatorNonAct} alt="img" />
            </div>
            <div className={m.vhf__gallery__indicator}>
              <img src={IndicatorNonAct} alt="img" />
            </div>
          </div> */}
      </Swiper>
    </div>
  );
};
