import b from './button.module.scss';
import React, { useState, useEffect } from 'react';

export const Button = ({buttonText, handleClick, openModal}) => {
    return (
    <div className={b.button} onClick={handleClick}>{buttonText}</div>
    )
}
console.log(Button)