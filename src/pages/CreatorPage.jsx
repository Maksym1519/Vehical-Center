import '../style.scss';
import Cp from './creatorPage.module.scss';
import {Header} from '../components/Header';
import { AboutUser } from '../components/creatorPage/AboutUser';
import { VFHCards } from '../components/WFH-Cards';

export const CreatorPage = () => {
        return (
        <div className={Cp.wrapper}>
         <div className={Cp.header__wrapper}>
         <Header />
         </div>
         <div className={Cp.container}>
         <AboutUser />
         <VFHCards />
         </div>
         </div>
    )
}