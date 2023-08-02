import qg from "./quiz8.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz9 } from "./Quiz9";

export const Quiz8 = ({
  openModal,
  setNextOpen,
  setCurrentStep5,
  setDivWidth,
  handleBackClick,
  currentStep5
  }) => {
    const [isOpenQuiz9, setCurrentOpen] = useState(true);
    const [showQuiz9Content, setShowQuiz9Content] = useState(false); 
    const [currentStep6, setCurrentStep6] = useState(1);
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 11.1);
    setCurrentStep6(2); 
    setShowQuiz9Content(true);
    setCurrentOpen(false)
    };
  return (
    <div className={qg.quiz__wrapper}>
      <div className={qg.quiz__container}>
         {isOpenQuiz9 && currentStep5 === 2 && ( // Показываем контент только на первом шаге
          <div className={qg.content__body}>
            <h2 className={qg.quiz__title}>When were you born?</h2>
            {/* <p className={qg.quiz__subTitle}>
            Providing your location helps find the best deals near you.</p> */}
            <div className={qg.input__wrapper}>
               <div className={qg.input__item__wrapper}>
                <input
                  type="text"
                  className={qg.input__item}
                  placeholder="Year"
                />
              </div>
               <div className={qg.input__item__wrapper}>
                <input
                  type="text"
                  className={qg.input__item}
                  placeholder="Month"
                />
              </div>
               <div className={qg.input__item__wrapper}>
                <input
                  type="text"
                  className={qg.input__item}
                  placeholder="Day"
                />
              </div>
            </div>
            <div className={qg.button__wrapper}>
              <button className={qg.quiz__button} onClick={handleClick}>
                Continue
              </button>
              <div className={qg.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
      {currentStep6 === 2 && showQuiz9Content && (
        <Quiz9
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep6={currentStep6}
          setCurrentStep6={setCurrentStep6}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
     </div>
  );
};
