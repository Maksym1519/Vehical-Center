import ca from "./calculator.module.scss";
import { Header } from "../../components/Common/Header/Header";
import { IntroTitle } from "../../components/Common/IntroTitle";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Common/Footer/Footer";

export const Calculator = () => {
  return (
    <div className={ca.calculator__wrapper}>
      <Header />
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
