import React from 'react';
import classes from './Button.module.css';
const Button = (props) => 
{
    return(
        <button className={[classes.buttonStyle,classes[props.styling]].join(' ')}>{props.val}</button>
    )
}
export default Button;