import n from './404.module.scss';
import Icon from '../../images/icon-404.svg'

const NotFound = () => {
    return (
        <div className={n.notFound__wrapper}>
           <div className={n.notFound__container}>
           <img src={Icon} alt="logo" />
           <h3 className={n.notFound__title}>404 page</h3>
           <p className={n.notFound__text}>Page not found or such pages do not exist.</p>
           <button className={n.notFound__button}>Go home</button>
            </div>
        </div>
    )
}

export default NotFound;