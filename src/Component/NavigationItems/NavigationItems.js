import React from 'react';
// import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Cover from './../../Hoc/Cover';
const NavigationItems = (props) =>
{
    return(
                    <Cover>
                        <NavigationItem name="Home"></NavigationItem>
                        {/* <NavigationItem name="Categories" hoverable={props.hoverable} drop={true} 
                        show={props.show} clicked={props.clicked} 
                        dropList={["Decor","Kitchenware","Furniture & Lightning","Tableware"]}>
                        </NavigationItem> */}
                        <NavigationItem name="About"></NavigationItem>
                        <NavigationItem name="Contact Us"></NavigationItem>
                    </Cover>
                    
    )
}
export default NavigationItems;