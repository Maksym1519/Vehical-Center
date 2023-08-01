import qb from "./quiz2.module.scss";
import { useState } from "react";
import { Quiz31 } from "./Quiz31";
import Back from "../../images/quiz-back.svg";

export const Quiz2 = ({
  setCurrentStep,
  setDivWidth,
  setNextOpen,
  openModal,
  closeModal,
  handleBackClick,
  currentStep
}) => {
   const [showQuiz31Content, setShowQuiz31Content] = useState(false); // Add a state to track visibility of Quiz31 content
   const handleClick = () => {
    setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setNextOpen(true);
    setCurrentStep((prevStep) => prevStep + 1); // Increase the currentStep to navigate to the next step (Quiz31)
    setShowQuiz31Content(true);
    };
  
  
  return (
    <div className={qb.quiz__wrapper}>
      <div className={qb.quiz__container}>
        {/* <div className={qb.progress__bar}>
          <div
            className={qb.progress__bar__fill}
           
          />
        </div> */}
        {currentStep === 2 && ( // Показываем контент только на первом шаге
          <div className={qb.content__body}>
            <h2 className={qb.quiz__title}>What's your employment status?</h2>
            <p className={qb.quiz__subTitle}>
              Your employment status will help determine the best vehicle and
              financing options for you.
            </p>
            <div className={qb.input__wrapper}>
              <div className={qb.input__item__wrapper}>
                <input
                  type="text"
                  className={qb.input__item}
                  placeholder="Employed"
                />
              </div>
              <div className={qb.input__item__wrapper}>
                <input
                  type="text"
                  className={qb.input__item}
                  placeholder="Self-Employed"
                />
              </div>
              <div className={qb.input__item__wrapper}>
                <input
                  type="text"
                  className={qb.input__item}
                  placeholder="Student"
                />
              </div>
              <div className={qb.input__item__wrapper}>
                <input
                  type="text"
                  className={qb.input__item}
                  placeholder="Retired / Pension"
                />
              </div>
              <div className={qb.input__item__wrapper}>
                <input
                  type="text"
                  className={qb.input__item}
                  placeholder="Other"
                />
              </div>
            </div>
            <div className={qb.button__wrapper}>
              <button className={qb.quiz__button} onClick={handleClick}>
                Continue
              </button>
              <div className={qb.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
      {currentStep === 3 && showQuiz31Content && (
        <Quiz31
          openModal={openModal}
          closeModal={closeModal}
          currentStep={currentStep}
          setDivWidth={setDivWidth}
          setNextOpen={setNextOpen}
          handleBackClick={handleBackClick}
        />
      )}
    </div>
  );
};
