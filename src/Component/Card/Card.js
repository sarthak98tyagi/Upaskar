import React from 'react';
import classes from './Card.module.css';
import Button from './../../UI/Button/Button';
const Card = (props) =>
{
    return(
        <div className={classes.cardBody}>
            <div className={classes.cardImageHolder}></div>
            <a href='/'><Button val="Buy" styling="theme"/></a>
        </div>)
} 
export default Card; 