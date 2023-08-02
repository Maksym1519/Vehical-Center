import qi from "./quiz10.module.scss";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Back from "../../images/quiz-back.svg";
import Succes from '../../images/Success-quiz.svg'

export const Quiz10 = ({
  openModal,
  setNextOpen,
  setCurrentStep7,
  setDivWidth,
  handleBackClick,
  currentStep7,
}) => {
  const handleClick = () => {
    setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setCurrentStep7(2);
  };
  return (
    <div className={qi.quiz__wrapper}>
      <div className={qi.quiz__container}>
        {currentStep7 === 2 && ( // Показываем контент только на первом шаге
          <div className={qi.content__body}>
            <img src={Succes} alt="icon" className={qi.succes} />
            <h2 className={qi.quiz__title}>Application successful!</h2>
            <p className={qi.quiz__subTitle}>
              Your response was successfully submitted. Thank you! Our team will
              reach out to you shortly.
            </p>
            <div className={qi.input__wrapper}>
             <div className={qi.input__item__wrapper}>
                <h4 className={qi.input__title}>Confirmation number:</h4>
                <input
                  type="text"
                  className={qi.input__item}
                  placeholder="0002466-1vwrh0"
                />
              </div>
            </div>
            <div className={qi.button__wrapper}>
              <Link to="/">
              <button className={qi.quiz__button} onClick={handleClick}>
              Go to main page
              </button>
            </Link>
              <div className={qi.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
