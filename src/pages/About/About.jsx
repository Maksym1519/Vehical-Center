import React, { useRef, useState } from "react";
import { Header } from "../../components/Common/Header/Header";
import { IntroTitle } from "../../components/Common/IntroTitle";
import { Button } from "../../components/Common/Button";
import { ButtonProps } from "../../components/Common/Button";
import { Button178 } from "../../components/Common/Button";
import { ClientSlider } from "../../components/ClientSlider";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Common/Footer/Footer";
import a from "./about.module.scss";
import m from "../Main/main.module.scss";
import Car from "../../images/aboutMission-car.webp";
import StepIcon from "../../images/step-icon.svg";
import TransCar from "../../images/transparency-car.webp";
import TeamBg from "../../images/team-bg.webp";
import FeatureBg from "../../images/features-bg.webp";

 const About = () => {
  return (
    <div className={a.about__wrapper}>
      <Header />
      <IntroTitle text={"About VAC "} />
      <div className={a.aboutMission__wrapper}>
        <div className={a.aboutMission__container}>
          <div className={a.aboutMission__info}>
            <h3 className={a.info__title}>Our mission</h3>
            <p className={a.info__text}>
              Our mission at VAC is to help you find the perfect car at the
              perfect price and with the perfect auto loan. We make buying a car
              simple. You can complete the entire process from home—we’ll even
              deliver the car to you!
            </p>
            {/* <button className={a.info__button}>Request a Car</button> */}
            <Button178 text={'REQUEST A CAR'} />
          </div>
          <div className={a.aboutMission__imgWrapper}>
            <img src={Car} alt="car" />
          </div>
        </div>
      </div>
      <div className={a.getCar__wrapper}>
        <div className={a.getCar__container}>
          <div className={a.getCar__body}>
            <div className={a.body__item}>
              <h3 className={a.body__item__title}>Get your dream car</h3>
              <p
                className={a.body__item__text + " " + a.body__item__textMargin}
              >
                We founded VAC because we hated how complicated it was to buy a
                car. You only have so much free time in your life. You don’t
                want to waste it going to different car dealerships every
                weekend for weeks and months trying to track down the right car.
              </p>
              <p className={a.body__item__text}>
                We also hated how choosing a car and figuring out the financing
                for the vehicle were treated as totally separate processes!
                Instead of dealing with a salesperson, then being handed off to
                a closer, and then shuffled over to a finance manager, we wanted
                to create a way for people to buy a car and only deal with a
                single person for the entire process.
              </p>
            </div>
            <div className={a.body__item}>
              <div className={a.body__item__row}>
                <div className={m.step__iconWrapper}>
                  <img src={StepIcon} alt="icon" className={m.step__iconImg} />
                  <span className={m.step__iconNumber}>1</span>
                </div>
                <div className={a.text__wrapper}>
                  <h4 className={a.getCar__rowTitle}>Quickly</h4>
                  <p className={a.body__item__text}>
                    You do not spend a lot of your time going to car dealerships
                  </p>
                </div>
              </div>
              <div className={a.body__item__row}>
                <div className={m.step__iconWrapper}>
                  <img src={StepIcon} alt="icon" className={m.step__iconImg} />
                  <span className={m.step__iconNumber}>2</span>
                </div>
                <div className={a.text__wrapper}>
                  <h4 className={a.getCar__rowTitle}>Simply</h4>
                  <p className={a.body__item__text}>
                    You can order your dream car just by talking to our
                    specialist by phone
                  </p>
                </div>
              </div>
              <div className={a.body__item__row}>
                <div className={m.step__iconWrapper}>
                  <img src={StepIcon} alt="icon" className={m.step__iconImg} />
                  <span className={m.step__iconNumber}>3</span>
                </div>
                <div className={a.text__wrapper}>
                  <h4 className={a.getCar__rowTitle}>Conveniently</h4>
                  <p className={a.body__item__text}>
                    We will deliver the car directly to the doorstep of your
                    home or office
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={a.transparency__wrapper}>
        <div className={a.container}>
          <div className={a.transparency__container}>
            <div className={a.transparency__imgWrapper}>
              <img src={TransCar} alt="car" />
            </div>
            <div className={a.transparency__info}>
              <h3 className={a.transparency__info__title}>
                VAC is convenience and transparency
              </h3>
              <p className={a.transparency__info__text}>
                We want to make simple for you to find the car you want. We also
                want to make sure you are 100% comfortable with the terms of the
                conditions of your auto loan.
              </p>
              <p className={a.transparency__info__text}>
                Buying a car has never been easier. You pick out the car you
                want on our website. You work with one of our Qualified Agents
                to secure financing. Then we bring the car to you—all before you
                sign anything. You test drive the vehicle, and if you like it,
                you sign the loan documents right there and the car is yours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={a.bestPrice__wrapper}>
        <div className={a.container}>
          <div className={a.bestPrice__container}>
            <div className={a.bestPrice__block}>
              <h3 className={a.bestPrice__block__title}>
                Get a car at the best prices and conditions
              </h3>
              <p className={a.bestPrice__block__text}>
                Not only is buying a car with VAC easy, it’s also the best way
                to save money. We have partnerships with Canada’s largest
                lenders. That allows us to help you secure loans at the best
                interest rates available.
              </p>
              <p className={a.bestPrice__block__text}>
                Because convenience and transparency are our founding
                principles, we take the time to answer all of your questions
                about the vehicle and the auto loan. We will send you pictures
                and videos of any part of the car you like before you request a
                test drive.
              </p>
            </div>
            <div className={a.bestPrice__block}>
              <h4 className={a.bestPrice__block__subTitle}>
                We think that VAC is the best way to buy a car in Canada. Try it
                for yourself and see how much time and money you can save.
              </h4>
              <p
                className={
                  a.bestPrice__block__text +
                  " " +
                  a.bestPrice__block__textMargin
                }
              >
                There are never any hidden fees or costs. We never ask you to
                sign anything until we have explained it clearly and you have
                had a chance to read it.
              </p>
              <Button178 text={'REQUEST A CAR'}/>
            </div>
          </div>
        </div>
      </div>
      <div className={a.agents__wrapper}>
        <div className={a.container}>
          <div className={a.agents__container}>
            <div className={a.agents__block + " " + a.agents__block__shadow}>
              <h4 className={a.agents__block__subTitle}>
                Contact us today and speak with one of our qualified agents
              </h4>
              <ButtonProps text={"Contact Us Now"} />
            </div>
            <div className={a.agents__block}>
              <h3 className={a.agents__block__title}>Our qualified agents</h3>
              <p className={a.agents__block__text}>
                The true secret to success of VAC isn’t our streamlined
                purchasing and financing processes. The real reason VAC is the
                easiest and best way to buy a car in Canada is because of our
                outstanding Qualified Agents.
              </p>
              <p className={a.agents__block__text}>
                Our team provides you with the best customer experience in the
                automotive industry. You work with a dedicated representative
                throughout the process. They are able to answer any questions
                you have about any of our vehicles or the financing. Are you
                interested in seeing pictures or videos of a car? Your qualified
                agent will send them to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={a.aboutSlider__wrapper}>
        <ClientSlider />
      </div>
      <div className={a.team__wrapper}>
        <div className={a.container}>
          <div className={a.team__container}>
            <div className={a.team__info}>
              <h3 className={a.team__title}>
                We're dynamic team of creative people with innovative mind
              </h3>
              <div className={a.team__info__item}>
                <h4 className={a.team__subTitle}>Our History</h4>
                <p className={a.team__text}>
                  We founded VAC because we hated how complicated it was to buy
                  a car. You only have so much free time in your life. You don’t
                  want to waste it going to different car dealerships every
                  weekend for weeks and months trying to track down the right
                  car.
                </p>
              </div>
              <div className={a.team__info__item}>
                <h4 className={a.team__subTitle}>Our Goal</h4>
                <p className={a.team__text}>
                  Buying a car has never been easier. You pick out the car you
                  want on our website. You work with one of our Qualified Agents
                  to secure financing. Then we bring the car to you—all before
                  you sign anything. You test drive the vehicle, and if you like
                  it, you sign the loan documents right there and the car is
                  yours.{" "}
                </p>
              </div>
            </div>
            <div className={a.team__imgWrapper}>
              <img src={TeamBg} alt="bg" />
            </div>
          </div>
        </div>
      </div>
      <div className={a.features__wrapper}>
        <div className={a.container}>
          <div className={a.features__container}>
            <div className={a.features__imgWrapper}>
              <img src={FeatureBg} alt="bg" />
            </div>
            <div className={a.features__info}>
               <div className={a.features__info__description}>
                  <h3 className={a.features__title}>Main features</h3>
                  <p className={a.features__text}>We are your one stop shop. We believe that vehicle shopping 
                  should be a fun and painless process and with years of experience, we make it just that.</p>
               </div>
               <div className={a.statistics__wrapper}>
                 <div className={a.statistics__item}>
                    <span className={a.statistics__item__numbers}>7,988+</span>
                    <span className={a.statistics__item__text}>Sold Cars</span>
                 </div>
                 <div className={a.statistics__item}>
                    <span className={a.statistics__item__numbers}>123</span>
                    <span className={a.statistics__item__text}>Working Experts</span>
                 </div>
                 <div className={a.statistics__item}>
                    <span className={a.statistics__item__numbers}>1560+</span>
                    <span className={a.statistics__item__text}>Happy Clients</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className={a.counter__wrapper}>
      <Counter text={'Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.'} title={'Let’s figure out how much you can afford'} />
      </div>
      <Footer />
    </div>
  );
};

export default About;