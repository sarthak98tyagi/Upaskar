import React from 'react';
// import classes from './Layout.module.css';
import Cover from './../../Hoc/Cover';
import Navbar from './../../Container/Navbar/Navbar';
// import {Button} from 'react-bootstrap';
const Layout = () =>
{
    return (
        <Cover>
            <Navbar></Navbar>
        </Cover>
    )
}
export default Layout;