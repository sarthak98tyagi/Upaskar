import React from 'react';
import classes from './Layout.module.css';
import Cover from './../../Hoc/Cover';
import Navbar from './../../Container/Navbar/Navbar';
const Layout = (props) =>
{
    return (
        <Cover>
            <Navbar></Navbar>
            <main className={classes.content}>
                {props.children}
            </main>
        </Cover>
    )
}
export default Layout;