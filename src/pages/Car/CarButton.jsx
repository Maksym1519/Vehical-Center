import cb from './carButton.module.scss';

export const CarButton = ({text}) => {
    return (
        <div className={cb.button__wrapper}>
            {text}
        </div>
    )
}
export const CarButtonHeader = ({text}) => {
    return (
        <div className={cb.buttonHeader__wrapper}>
            {text}
        </div>
    )
}
export const CarButtonHeaderMobile = ({text}) => {
    return (
        <div className={cb.buttonHeaderMobile__wrapper}>
            {text}
        </div>
    )
}