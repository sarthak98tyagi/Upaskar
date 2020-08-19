import React from 'react';
import classes from './Details.module.css';
const Details = (props) =>
{
    return(
        <div className={classes.details}>
            <p><b>Material:</b> {props.wood} wood</p>
            <p><b>Usage:</b> {props.use}</p>
            <p><b>Size:</b> {props.size}</p>
            {props.children?<p>{props.children}</p>:null}
        </div>
    )
}
export default Details;
