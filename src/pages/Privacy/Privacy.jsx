import p from "./privacy.module.scss";
import React, { useState } from "react";
import { styled } from "styled-components";
import { IconContext } from "react-icons";
import ArrowDown from "../../images/Arrow-Bottom.svg";
import ArrowTop from "../../images/Arrow-Top.svg";
import { lazy, Suspense } from "react";
const Header = lazy(() => import("../../components/Common/Header/Header"));
//import { Header } from '../../components/Common/Header/Header';
import { IntroTitle } from "../../components/Common/IntroTitle";
import { PrivacyData } from "./PrivacyData";
import { Footer } from "../../components/Common/Footer/Footer";

function LoadingInfo() {
  return <h2>Loading...</h2>;
}

const Privacy = () => {
  const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: auto;
    margin-top: 40px;
    row-gap: 10px;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    min-width: 100%;
  `;

  const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    //border: 1px solid var(--secondary-s-color, #D7D7D7);
    //background: var(--primary-white, #FFF);
    //

    h1 {
      color: var(--primary-content, #41456b);
      font-family: Gilroy-600;
      font-size: 20px;
      line-height: 25px; /* 125% */
      //margin-bottom: 10px
    }

    span {
      //margin-right: 1.5rem;
    }
  `;
  const Dropdown = styled.div`
    width: 100%;
    //height: 87px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: var(--secondary-text, #606276);
      font-family: "Gilroy-400";
      font-size: 16px;
      line-height: 180%;
      letter-spacing: 0.32px;
      margin-top: 22px;
    }
  `;

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <div className={p.privacy__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
        <Header />
      </Suspense>
      <IntroTitle text="Privacy Policy" />
      <div className={p.privacy__container}>
        <IconContext.Provider value={{ color: "#00FFB9", size: "125px" }}>
          <AccordionSection>
            <Container>
              {PrivacyData.map((item, index) => {
                return (
                  <>
                    <div className={p.line__wrapper}>
                      <Wrap onClick={() => toggle(index)} key={index}>
                        <h1 className={p.dropdown__title}>{item.title}</h1>
                        <span className={p.arrow__wrapper}>
                          {clicked === index ? (
                            <img src={ArrowTop} alt="arrow" />
                          ) : (
                            <img
                              src={ArrowDown}
                              alt="arrow"
                              className={p.terms__arrow}
                            />
                          )}
                        </span>
                      </Wrap>
                      {clicked === index ? (
                        <Dropdown>
                          <p className={p.dropdown__text}>{item.content}</p>
                        </Dropdown>
                      ) : null}
                    </div>
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
      </div>
      <div className={p.footer__wrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
