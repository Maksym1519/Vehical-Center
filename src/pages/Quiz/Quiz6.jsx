import qe from "./quiz6.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz7 } from "./Quiz7";

export const Quiz6= ({
  openModal,
  setNextOpen,
  setCurrentStep3,
  setDivWidth,
  handleBackClick,
  currentStep3
  }) => {
    const [isOpenQuiz7, setCurrentOpen] = useState(true);
    const [showQuiz7Content, setShowQuiz7Content] = useState(false); 
    const [currentStep4, setCurrentStep4] = useState(1);
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 11.1);
    setCurrentStep4(2); 
    setShowQuiz7Content(true);
    setCurrentOpen(false)
    };
  return (
    <div className={qe.quiz__wrapper}>
      <div className={qe.quiz__container}>
         {isOpenQuiz7 && currentStep3 === 2 && ( // Показываем контент только на первом шаге
          <div className={qe.content__body}>
            <h2 className={qe.quiz__title}>How long receiving?</h2>
            <p className={qe.quiz__subTitle}>
            Your income details help us make sure your vehicle payments are easy and affordable.</p>
            <div className={qe.input__wrapper}>
               <div className={qe.input__item__wrapper}>
                <input
                  type="text"
                  className={qe.input__item}
                  placeholder="Title"
                />
              </div>
            </div>
            <div className={qe.button__wrapper}>
              <button className={qe.quiz__button} onClick={handleClick}>
                Continue
              </button>
              <div className={qe.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
      {currentStep4 === 2 && showQuiz7Content && (
        <Quiz7
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep4={currentStep4}
          setCurrentStep4={setCurrentStep4}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
     </div>
  );
};
