import qh from "./quiz9.module.scss";
import { useState } from "react";
import Back from "../../images/quiz-back.svg";
import { Quiz10 } from "./Quiz10";

export const Quiz9 = ({
  openModal,
  setNextOpen,
  setCurrentStep6,
  setDivWidth,
  handleBackClick,
  currentStep6,
}) => {
    const [isOpenQuiz10, setCurrentOpen] = useState(true);
    const [showQuiz10Content, setShowQuiz10Content] = useState(false); 
    const [currentStep7, setCurrentStep7] = useState(1);
  const handleClick = () => {
    //setDivWidth((prevWidth) => prevWidth + (100 - prevWidth) * 0.15);
    setDivWidth((prevWidth) => prevWidth + 10);
    setCurrentStep7(2);
    setShowQuiz10Content(true);
    setCurrentOpen(false)
  };
  return (
    <div className={qh.quiz__wrapper}>
      <div className={qh.quiz__container}>
        {isOpenQuiz10 && currentStep6 === 2 && ( // Показываем контент только на первом шаге
          <div className={qh.content__body}>
            <h2 className={qh.quiz__title}>Congratulations! Last step.</h2>
            <p className={qh.quiz__subTitle}>
              Get access to your vehicle and financing options by creating your
              account. There is no obligation to continue with financing if you
              change your mind.{" "}
            </p>
            <div className={qh.input__wrapper}>
              <div className={qh.name__input__wrapper}>
                <div
                  className={
                    qh.input__item__wrapper + " " + qh.input__item__short
                  }
                >
                  <input
                    type="text"
                    className={qh.input__item}
                    placeholder="First name"
                  />
                </div>
                <div
                  className={
                    qh.input__item__wrapper + " " + qh.input__item__short
                  }
                >
                  <input
                    type="text"
                    className={qh.input__item}
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className={qh.input__item__wrapper}>
                <input
                  type="text"
                  className={qh.input__item}
                  placeholder="Email"
                />
              </div>
              <div className={qh.input__item__wrapper}>
                <input
                  type="text"
                  className={qh.input__item}
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className={qh.button__wrapper}>
              <button className={qh.quiz__button} onClick={handleClick}>
                Continue
              </button>
              <div className={qh.quiz__back} onClick={handleBackClick}>
                <img src={Back} alt="back" />
              </div>
            </div>
          </div>
        )}
      </div>
      {currentStep7 === 2 && showQuiz10Content && (
        <Quiz10
          openModal={openModal}
          setNextOpen={setNextOpen}
          currentStep7={currentStep7}
          setCurrentStep7={setCurrentStep7}
          setDivWidth={setDivWidth}
          handleBackClick={handleBackClick}
           />
      )}
    </div>
  );
};
