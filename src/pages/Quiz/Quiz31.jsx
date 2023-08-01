import qc from "./quiz31.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";

  export const Quiz31 = ({ currentStep, setDivWidth, setNextOpen, closeModal, handleBackClick }) => {
    const handleClick = () => {
        setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
        setNextOpen(true);
      };
  return (
    <div className={qc.quiz__wrapper}>
       <div className={qc.quiz__container}>
        {/* <div className={qc.progress__bar}>
          <div
            className={qc.progress__bar__fill}
           
          />
        </div> */}
        {currentStep === 3 && ( // Показываем контент только на первом шаге
        <div className={qc.content__body}>
          <h2 className={qc.quiz__title}>Enter your monthly income</h2>
          <p className={qc.quiz__subTitle}>
            Your employment status will help determine the best vehicle and
            financing options for you.
          </p>
          <div className={qc.input__wrapper}>
            <div className={qc.input__item__wrapper}>
              <input
                type="text"
                className={qc.input__item}
                placeholder="Employed"
              />
            </div>
            <div className={qc.input__item__wrapper}>
              <input
                type="text"
                className={qc.input__item}
                placeholder="Self-Employed"
              />
            </div>
            <div className={qc.input__item__wrapper}>
              <input
                type="text"
                className={qc.input__item}
                placeholder="Student"
              />
            </div>
            <div className={qc.input__item__wrapper}>
              <input
                type="text"
                className={qc.input__item}
                placeholder="Retired / Pension"
              />
            </div>
            <div className={qc.input__item__wrapper}>
              <input
                type="text"
                className={qc.input__item}
                placeholder="Other"
              />
            </div>
          </div>
          <div className={qc.button__wrapper}>
            <button className={qc.quiz__button} onClick={handleClick}>
              Continue
            </button>
            <div className={qc.quiz__back} onClick={handleBackClick}>
              <img src={Back} alt="back" />
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};



