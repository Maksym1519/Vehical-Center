import b from './Button.module.scss';


export const Button = () => {
       return (
        <div className={b.wrapper}>
           Request a car
        </div>
    )
}
export const ButtonProps = (props) => {
       return (
        <div className={b.wrapper}>
        {props.text}
        </div>
    )
}
export const Button178 = (props) => {
       return (
        <div className={b.wrapper178 + " " + b.wrapper}>
        {props.text}
        </div>
    )
}