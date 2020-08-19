import React from 'react';
import classes from './Card.module.css';
import Button from './../../UI/Button/Button';
import * as lib from '../../Source/ImagePath';
import Details from './../Details/Details';
const Card = (props) =>
{
    return(
        <div className={classes.cardBody}>
            <div className={classes.cardImageHolder}>
                <img src={lib[props.src][0]} alt="Loading.."/>
            </div>
    <Details wood={lib[props.src][2]} use={lib[props.src][3]} size={lib[props.src][4]}>{lib[props.src].length>5?lib[props.src][5]:null}</Details>
            <a href={lib[props.src][1]} target="blank"><Button val="Buy" styling="theme"/></a>
        </div>)
} 
export default Card; 