import ca from './calculator.module.scss';
import { Header } from '../../components/Common/Header/Header';
import { IntroTitle } from '../../components/Common/IntroTitle';
import { Counter } from '../../components/Counter';
import { Footer } from '../../components/Common/Footer/Footer';

export const Calculator = () => {
    return (
        <div className={ca.calculator__wrapper}>
          <Header />
          <IntroTitle text ={'Use our free calculator!'}/>
          <div className={ca.counter__wrapper}><Counter /></div>
          <Footer />
        </div>
    )
}