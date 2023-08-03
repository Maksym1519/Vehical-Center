import t from './terms.module.scss';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IconContext } from 'react-icons';
import { Footer } from '../../components/Common/Footer/Footer';
import ArrowDown from '../../images/Arrow-Bottom.svg';
import ArrowTop from '../../images/Arrow-Top.svg';
import { lazy, Suspense } from 'react';
const Header = lazy(()=>import('../../components/Common/Header/Header'))
//import { Header } from '../../components/Common/Header/Header';
import { IntroTitle } from '../../components/Common/IntroTitle';
import { TermsData } from './termsData/TermsData';


function LoadingInfo () {
  return <h2>Loading...</h2>
  
}


const Terms = () => {
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
    color: var(--primary-content, #41456B);
    font-family: Gilroy-600;
    font-size: 20px;
    line-height: 25px; /* 125% */;
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
    font-family: 'Gilroy-400';
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.32px;
    margin-top: 22px;
  }
`;

const [clicked, setClicked] = useState(false);
const toggle = index => {
  if (clicked === index) {
    //if clicked question is already active, then close it
    return setClicked(null);
  }

  setClicked(index);
};
    return (
        <div className={t.terms__wrapper}>
        <Suspense fallback={<LoadingInfo />}>
    <Header />
  </Suspense>
         <IntroTitle text={'Terms & Conditions'} />
         <div className={t.terms__container}>
         <IconContext.Provider value={{ color: '#00FFB9', size: '125px' }}>
      <AccordionSection>
        <Container>
          {TermsData.map((item, index) => {
            return (
              <>
              <div className={t.line__wrapper}>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 className={t.dropdown__title}>{item.title}</h1>
                  <span className={t.arrow__wrapper}>{clicked === index ? <img src={ArrowTop} alt="arrow" /> : <img src={ArrowDown} alt="arrow" className={t.terms__arrow} />}</span>    
                </Wrap>
                {clicked === index ? (
                <Dropdown><p className={t.dropdown__text}>{item.content}</p></Dropdown>
                ) : null}
                </div>
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
       </div>
       <div className={t.footer__wrapper}><Footer /></div>
        </div>
    )
}

export default Terms;