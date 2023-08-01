import qa from "./quiz1.module.scss";
import { useState, useEffect } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { HeaderCar } from "../../components/Common/Header/HeaderCar";
import { HeaderQuiz } from "../../components/Common/Header/HeaderQuiz.jsx";
import { Quiz2 } from "./Quiz2";
import { Quiz31 } from "./Quiz31";
import { Quiz41 } from "./Quiz41";

const Quiz1 = () => {
  const [isOpen, setNextOpen] = useState(false);
  const openModal = () => {
    setNextOpen(true);
  };
  const closeModal = () => {
    setNextOpen(false);
  };
  //----------------------------------------
  const [divWidth, setDivWidth] = useState(0);
  const [currentStep, setCurrentStep] = useState(1); // Используем состояние для отслеживания текущего шага

  const handleClick = () => {
    // Увеличиваем ширину на 15% от текущей ширины (на 0% если div уже заполнен)
    setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setCurrentStep((prevStep) => prevStep + 1);
    openModal();
  };
  const handleBackClick = () => {
    setCurrentStep((prevStep) => Math.max(1, prevStep - 1)); // Ensure the step doesn't go below 1
    setDivWidth((prevWidth) => prevWidth - (100 - prevWidth) * 0.15);
  };
  return (
    <div className={qa.quiz__wrapper}>
      <HeaderQuiz />
      <div className={qa.quiz__container}>
        <div className={qa.progress__bar}>
          <div
            className={qa.progress__bar__fill}
            style={{
              width: `${divWidth}%`,
              height: "8px",
              backgroundColor: "#7380FF",
              transition: "width 0.3s ease", // Плавный переход при изменении ширины
            }}
          />
        </div>
        {currentStep === 1 && ( // Показываем контент только на первом шаге
          <div className={qa.content__body}>
            <h2 className={qa.quiz__title}>What's your budget?</h2>
            <p className={qa.quiz__subTitle}>
              Find vehicle options that fit your budget.
            </p>
            <div className={qa.input__wrapper}>
              <div className={qa.input__item__wrapper}>
                <input
                  type="text"
                  className={qa.input__item}
                  placeholder="Under $250/Month"
                />
              </div>
              <div className={qa.input__item__wrapper}>
                <input
                  type="text"
                  className={qa.input__item}
                  placeholder="$250-374/Month"
                />
              </div>
              <div className={qa.input__item__wrapper}>
                <input
                  type="text"
                  className={qa.input__item}
                  placeholder="$374-500/Month"
                />
              </div>
              <div className={qa.input__item__wrapper}>
                <input
                  type="text"
                  className={qa.input__item}
                  placeholder="Over $500/Month"
                />
              </div>
            </div>

            <button className={qa.quiz__button} onClick={handleClick}>
              Continue
            </button>
          </div>
        )}
      </div>
      {isOpen && (
        <Quiz2
          openModal={openModal}
          closeModal={closeModal}
          setCurrentStep={setCurrentStep}
          setDivWidth={setDivWidth}
          setNextOpen={setNextOpen}
          handleBackClick={handleBackClick}
          currentStep={currentStep}
        />
      )}
    </div>
  );
};

export default Quiz1;
