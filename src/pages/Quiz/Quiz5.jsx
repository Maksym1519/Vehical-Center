import qe from "./quiz5.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz6 } from "./Quiz6";


export const Quiz5 = ({
  openModal,
  setNextOpen,
  setCurrentStep2,
  setDivWidth,
  handleBackClick,
  currentStep2
  }) => {
    const [isOpenQuiz6, setCurrentOpen] = useState(true);
    const [showQuiz6Content, setShowQuiz6Content] = useState(false); 
    const [currentStep3, setCurrentStep3] = useState(1);
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 11.1);
    setShowQuiz6Content(true)
    setCurrentStep3(2); 
    setCurrentOpen(false)
    };
  return (
    <div className={qe.quiz__wrapper}>
      <div className={qe.quiz__container}>
         {isOpenQuiz6 && currentStep2 === 2 && ( // Показываем контент только на первом шаге
          <div className={qe.content__body}>
            <h2 className={qe.quiz__title}>How long have you been earning this income?</h2>
            <p className={qe.quiz__subTitle}>
            Your income details help us make sure your vehicle payments are easy and affordable.</p>
            <div className={qe.input__wrapper}>
              <div className={qe.input__item__wrapper}>
                <input
                  type="text"
                  className={qe.input__item}
                  placeholder="Employer"
                />
              </div>
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
      {currentStep3 === 2 && showQuiz6Content && (
        <Quiz6
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep3={currentStep3}
          setCurrentStep3={setCurrentStep3}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
     </div>
  );
};
