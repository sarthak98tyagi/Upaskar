import React from 'react';
import classes from './Layout.module.css';
import Cover from './../../Hoc/Cover';
import Navbar from './../../Container/Navbar/Navbar';
import Footer from './../Footer/Footer';
const Layout = (props) =>
{
    return (
        <Cover>
            <Navbar></Navbar>
            <main className={classes.content}>
                {props.children}
            </main>
            <Footer/>
        </Cover>
    )
}
export default Layout;