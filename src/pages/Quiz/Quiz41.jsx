import qd from "./quiz41.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz31 } from "./Quiz31";

export const Quiz41 = ({
  setCurrentStep,
  currentStep,
  setDivWidth,
//   openModal,
//   closeModal,
  handleBackClick,
}) => {
  const handleClick = () => {
    setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    // setNextOpen(true);
    setCurrentStep((prevStep) => prevStep + 1); // Increase the currentStep to navigate to the next step (Quiz31)
  };
  return (
    <div className={qd.quiz__wrapper}>
      <div className={qd.quiz__container}>
        {/* <div className={qd.progress__bar}>
          <div
            className={qd.progress__bar__fill}
           
          />
        </div> */}
        {currentStep === 4 && ( // Показываем контент только на первом шаге
          <div className={qd.content__body}>
            <h2 className={qd.quiz__title}>Tell us about your employment</h2>
            <p className={qd.quiz__subTitle}>
              We wont come visit but we need these details to confirm your
              employment status so you can get the best rates possible.
            </p>
            <div className={qd.input__wrapper}>
              <div className={qd.input__item__wrapper}>
                <input
                  type="text"
                  className={qd.input__item}
                  placeholder="Employer"
                />
              </div>
              <div className={qd.input__item__wrapper}>
                <input
                  type="text"
                  className={qd.input__item}
                  placeholder="Title"
                />
              </div>
            </div>
            <div className={qd.button__wrapper}>
              <button className={qd.quiz__button} onClick={handleClick}>
                Continue
              </button>
              <div className={qd.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
