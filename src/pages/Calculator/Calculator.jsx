import ca from "./calculator.module.scss";
import { lazy, Suspense } from 'react';
const Header = lazy(()=>import('../../components/Common/Header/Header'))
//import { Header } from "../../components/Common/Header/Header";
import { IntroTitle } from "../../components/Common/IntroTitle";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Common/Footer/Footer";


function LoadingInfo () {
  return <h2>Loading...</h2>
  
}
 const Calculator = () => {
  return (
    <div className={ca.calculator__wrapper}>
      <Suspense fallback={<LoadingInfo />}>
    <Header />
  </Suspense>
      <IntroTitle text={"Use our free calculator!"} />
      <div className={ca.counter__wrapper}>
        <Counter
          text={
            "Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments."
          }
          title={"Let’s figure out how much you can afford"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Calculator;
