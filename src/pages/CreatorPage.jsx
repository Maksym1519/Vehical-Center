import '../style.scss';
import Cp from './creatorPage.module.scss';
import {Header} from '../components/Header';
import { AboutUser } from '../components/creatorPage/AboutUser';

export const CreatorPage = () => {
    return (
        <div className={Cp.wrapper}>
         <div className={Cp.header__wrapper}>
         <Header />
         <AboutUser />
         </div>
        </div>
    )
}