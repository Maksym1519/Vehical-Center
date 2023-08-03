import l from "./loanRates.module.scss";
import { lazy, Suspense } from "react";
const Header = lazy(() => import("../../components/Common/Header/Header"));
const CounterLazy = lazy(() => import("../../components/Counter"));
//import { Header } from "../../components/Common/Header/Header";
import { IntroTitle } from "../../components/Common/IntroTitle";
import { Button178 } from "../../components/Common/Button";
//import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Common/Footer/Footer";
import Car from "../../images/creditPolicy.webp";
import Procent from "../../images/Procent.svg";
import Clock from "../../images/Clock.svg";
import CarBenefit from "../../images/benefits-car.webp";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}

const LoanRates = () => {
  return (
    <div className={l.wrapper}>
      <Suspense fallback={<LoadingInfo />}>
        <Header />
      </Suspense>
      <IntroTitle text={"Loan rates"} />
      <div className={l.creditPolicy__wrapper}>
        <div className={l.creditPolicy__container}>
          <div className={l.creditPolicy__info}>
            <h3 className={l.info__title}>Our credit policy</h3>
            <p className={l.info__text}>
              You want to secure a loan that works for your budget. Here at VAC
              we work with Canada’s largest lenders to help you find the best
              interest rates and terms for your auto loan.
            </p>
            {/* <button className={a.info__button}>Request a Car</button> */}
            <Button178 text={"REQUEST A CAR"} />
          </div>
          <div className={l.creditPolicy__imgWrapper}>
            <img src={Car} alt="car" />
          </div>
        </div>
      </div>
      <div className={l.interestsRate__wrapper}>
        <div className={l.container}>
          <div className={l.interestsRate__container}>
            <h3 className={l.interestsRate__title}>
              Interest rates and loan terms
            </h3>
            <div className={l.interestsRate__blocksWrapper}>
              <div className={l.interestsRate__block}>
                <div className={l.interestsRate__block__header}>
                  <div className={l.block__header__imgWrapper}>
                    <img src={Procent} alt="icon" />
                  </div>
                  <h4 className={l.block__header__title}>
                    What are my interest rate options?
                  </h4>
                </div>
                <p className={l.block__text}>
                  We work to secure customized auto loans from Canada’s largest
                  lenders. Your interest rate is critical for determining the
                  total cost of your auto financing. Interest rates are based on
                  many factors including the loan amount, your credit score, and
                  your budget. We help you find the lowest interest rates
                  available for your auto loan.
                </p>
              </div>
              <div className={l.interestsRate__block}>
                <div className={l.interestsRate__block__header}>
                  <div className={l.block__header__imgWrapper}>
                    <img src={Clock} alt="icon" />
                  </div>
                  <h4 className={l.block__header__title}>
                    How long will my loan term be?
                  </h4>
                </div>
                <p className={l.block__text}>
                  Our goal is to find the right car and the right loan for you.
                  Because we have relationships with so many different lenders,
                  we can help you find the right term length for your budget.
                  The longer the loan is, often the lower the monthly payments
                  will be—but the more expensive the loan will be overall. Most
                  of the loans we secure for our clients are between 36 and 72
                  months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={l.benefits__wrapper}>
        <div className={l.benefits__container}>
          <div className={l.benefits__info}>
            <h3 className={l.benefits__info__title}>
              Benefits of getting an auto loan with VAC
            </h3>
            <p className={l.benefits__info__lightText}>
              For many people getting a reasonable auto loan is the best way for
              them to get a new car. However, the benefits of getting the right
              loan go beyond just being able to drive a nice vehicle.
            </p>
            <p className={l.benefits__info__text}>
              When you work with VAC, there are never any hidden costs or fees!
              We lay out all the terms and conditions so that you know exactly
              what details of the loan are before you sign anything.
            </p>
            <Button178 text={"REQUEST A CAR"} />
          </div>
          <div className={l.benefits__imgWrapper}>
            <img src={CarBenefit} alt="car" />
          </div>
        </div>
      </div>
      <div className={l.counter__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
        <CounterLazy
          text={
            "Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments."
          }
          title={"Let’s figure out how much you can afford"}
        />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default LoanRates;
