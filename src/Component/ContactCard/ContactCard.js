import React from 'react';
import classes from './ContactCard.module.css';
const ContactCard = (props) =>
{
    return (
        <div className={classes.ContactCard}>
            <h2>{props.name}</h2>
            <i className={props.icon}></i>
            <p>{props.data}</p>
        </div>
    )
}
export default ContactCard;


































































































