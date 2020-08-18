import React from 'react';
import classes from './Card.module.css';
import Button from './../../UI/Button/Button';
import * as lib from '../../Source/ImagePath';

const Card = (props) =>
{
    return(
        <div className={classes.cardBody}>
            <div className={classes.cardImageHolder}>
                <img src={lib[props.src][0]} alt="Loading.."/>
            </div>
            <a href={lib[props.src][1]} target="blank"><Button val="Buy" styling="theme"/></a>
        </div>)
} 
export default Card; 