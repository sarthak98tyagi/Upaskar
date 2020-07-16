import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Cover from './../../Hoc/Cover';
const NavigationItems = (props) =>
{
    return(
                    <Cover>
                        <NavigationItem name="Home"></NavigationItem>
                        <NavigationItem name="Categories" drop={true} show={props.show} clicked={props.clicked} dropList={["Decor","KitchenWare","Furniture"]}>
                        </NavigationItem>
                        <NavigationItem name="About"></NavigationItem>
                        <NavigationItem name="Contact Us"></NavigationItem>
                    </Cover>
                    
    )
}
export default NavigationItems;