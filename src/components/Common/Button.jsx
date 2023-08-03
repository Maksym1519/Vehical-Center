import b from './Button.module.scss';
import { Link } from 'react-router-dom';


export const Button = () => {
       return (
        <Link to='/catalog'>
        <div className={b.wrapper}>
           Request a car
        </div>
        </Link>
    )
}
export const ButtonProps = (props) => {
       return (
        <Link to='/catalog'>
        <div className={b.wrapper}>
        {props.text}
        </div>
        </Link>
    )
}
export const Button178 = (props) => {
       return (
        <Link to='/catalog'>
        <div className={b.wrapper178}>
        {props.text}
        </div>
        </Link>
    )
}
export const ButtonCounter = ({text}) => {
       return (
        <Link to='/catalog'>
        <div className={b.wrapperCounter}>
        {text}
        </div>
        </Link>
    )
}