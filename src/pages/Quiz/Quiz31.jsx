import qc from "./quiz31.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz41 } from "./Quiz41";

export const Quiz31 = ({
  setCurrentStep,
  currentStep,
  setDivWidth,
  // setNextOpen,
  // openModal,
  // closeModal,
  handleBackClick,
}) => {
  const [showQuiz41Content, setShowQuiz41Content] = useState(false); // Add a state to track visibility of Quiz31 content
  const handleClick = () => {
    setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    // setNextOpen(true);
    setCurrentStep((prevStep) => prevStep + 1); 
    setShowQuiz41Content(true);
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
      {currentStep === 4 && showQuiz41Content && (
        <Quiz41
          // openModal={openModal}
          // closeModal={closeModal}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setDivWidth={setDivWidth}
          // setNextOpen={setNextOpen}
          handleBackClick={handleBackClick}
           />
      )}
    </div>
  );
};
