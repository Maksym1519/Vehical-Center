import qc from "./quiz31.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz4 } from "./Quiz4";

export const Quiz31 = ({
  openModal,
  setNextOpen,
  setCurrentStep,
  setDivWidth,
  handleBackClick,
  currentStep
}) => {
  const [isOpenQuiz4, setCurrentOpen] = useState(true);
  const [showQuiz41Content, setShowQuiz41Content] = useState(false);
  const [currentStep1, setCurrentStep1] = useState(1);
  const [showQuiz4Content, setShowQuiz4Content] = useState(false); 
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 11.1);
    setCurrentStep1(2); 
    setShowQuiz4Content(true);
    setCurrentOpen(false)
    };
  return (
    <div className={qc.quiz__wrapper}>
      <div className={qc.quiz__container}>
       {isOpenQuiz4 && currentStep === 3 && ( // Показываем контент только на первом шаге
          <div className={qc.content__body}>
            <h2 className={qc.quiz__title}>Enter your monthly income</h2>
            <p className={qc.quiz__subTitle}>
              Your income details help us make sure your vehicle payments are
              easy and affordable.{" "}
              <span className={qc.text__bold}>
                Before taxes and deductions.
              </span>
            </p>
            <div className={qc.input__wrapper}>
              <div className={qc.input__item__wrapper}>
                <input
                  type="text"
                  className={qc.input__item}
                  placeholder="Monthly income"
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
    {currentStep1 === 2 && showQuiz4Content && (
        <Quiz4
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep1={currentStep1}
          setCurrentStep1={setCurrentStep1}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
    </div>
  );
};
