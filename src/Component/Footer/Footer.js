import React from 'react';
import classes from './Footer.module.css';
const Footer = (props) =>
{
    return(<div className={classes.footer}>
            <span> &#169; All rights reserved</span>
            <div className={classes.social}>
                <a target="blank" href="https://www.facebook.com/upaskarcreations/"><i className="fab fa-facebook-square"></i></a>
                <a target="blank" href='https://www.instagram.com/woodenhomedecorproducts/?hl=en'><i className="fab fa-instagram"></i></a>
                <a target="blank" href="https://twitter.com/UpaskarC"><i className="fab fa-twitter"></i></a>

            </div>
    </div>)
}
export default Footer;