import i from './introTitle.module.scss';
import { About } from '../../pages/About/About';
 
export const IntroTitle = (props) => {
    return (
        <div className={i.intro__wrapper}>
          <div className={i.intro__container}>
            <h2 className={i.intro__title}>{props.text}</h2>
          </div>
        </div>
    )
}