import qd from "./quiz41.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz5 } from "./Quiz5";


export const Quiz4 = ({
  openModal,
  setNextOpen,
  setCurrentStep1,
  setDivWidth,
  handleBackClick,
  currentStep1
  }) => {
    const [isOpenQuiz5, setCurrentOpen] = useState(true);
    const [showQuiz5Content, setShowQuiz5Content] = useState(false); 
    const [currentStep2, setCurrentStep2] = useState(1);
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 11.1);
    setShowQuiz5Content(true)
    setCurrentStep2(2); 
    setCurrentOpen(false)
  };
  
  return (
    <div className={qd.quiz__wrapper}>
      <div className={qd.quiz__container}>
         {isOpenQuiz5 && currentStep1 === 2 && ( // Показываем контент только на первом шаге
          <div className={qd.content__body}>
            <h2 className={qd.quiz__title}>Tell us about your employment</h2>
            <p className={qd.quiz__subTitle}>
            We wont come visit but we need these details to confirm your employment status so you can get the best rates possible.
              <span className={qd.text__bold}>
                Before taxes and deductions.
              </span>
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
      {currentStep2 === 2 && showQuiz5Content && (
        <Quiz5
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep2={currentStep2}
          setCurrentStep2={setCurrentStep2}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
     </div>
  );
};
