import qf from "./quiz7.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz8 } from "./Quiz8";

export const Quiz7= ({
  openModal,
  setNextOpen,
  setCurrentStep4,
  setDivWidth,
  handleBackClick,
  currentStep4
  }) => {
    const [isOpenQuiz8, setCurrentOpen] = useState(true);
    const [showQuiz8Content, setShowQuiz8Content] = useState(false); 
    const [currentStep5, setCurrentStep5] = useState(1);
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 11.1);
    setCurrentStep5(2); 
    setShowQuiz8Content(true);
    setCurrentOpen(false)
    };
  return (
    <div className={qf.quiz__wrapper}>
      <div className={qf.quiz__container}>
         {isOpenQuiz8 && currentStep4 === 2 && ( // Показываем контент только на первом шаге
          <div className={qf.content__body}>
            <h2 className={qf.quiz__title}>Where do you live?</h2>
            <p className={qf.quiz__subTitle}>
            Providing your location helps find the best deals near you.</p>
            <div className={qf.input__wrapper}>
               <div className={qf.input__item__wrapper}>
                <input
                  type="text"
                  className={qf.input__item}
                  placeholder="Street address"
                />
              </div>
               <div className={qf.input__item__wrapper}>
                <input
                  type="text"
                  className={qf.input__item}
                  placeholder="City"
                />
              </div>
               <div className={qf.input__item__wrapper}>
                <input
                  type="text"
                  className={qf.input__item}
                  placeholder="Province"
                />
              </div>
            </div>
            <div className={qf.button__wrapper}>
              <button className={qf.quiz__button} onClick={handleClick}>
                Continue
              </button>
              <div className={qf.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
      {currentStep5 === 2 && showQuiz8Content && (
        <Quiz8
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep5={currentStep5}
          setCurrentStep5={setCurrentStep5}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
     </div>
  );
};
