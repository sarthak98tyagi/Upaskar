import React from 'react';
import classes from './NavigationItem.module.css';
import Cover from './../../../Hoc/Cover';
import {NavLink} from 'react-router-dom';
const NavigationItem = (props) =>
{
    let drop=null;
    let dic={'Home':'/','Decor':'/Categories/Decor','Categories':'/','Kitchenware':'/Categories/KitchenWare','Furniture & Lightning':'/Categories/FurnitureandLightning','Tableware':'/Categories/TableWare','About':'/About','Contact Us':'/Contact'}
    let arr=[];
    console.log(props.name,dic[props.name])
    let item=<li className={classes.item}><NavLink  activeClassName={classes.active} to={dic[props.name]} exact>{props.name}</NavLink></li>;
    if(props.name==="Categories")
    {
        drop=props.drop;
        arr=[classes.dropContent];
        if(!props.hoverable && props.show)
        {
            if(arr.length>1)   
                arr.pop()   
            arr.push(classes.slideDown);    
        }
        // else if(!props.hoverable && !props.show)
        // {
        //     if(arr.length>1)   
        //         arr.pop();
        //     arr.push(classes.slideUp);
        // }
        
    }  
    if(drop)
    {
        const dropList=props.dropList;
        const dropDown = (<ul className={arr.join(' ')}>
                            {dropList.map((item,i) =>{
                                if(i===(props.dropList.length-1))
                                {
                                    return <li className={classes.item} key={i}><NavLink activeClassName={classes.active} to={dic[item]} exact>{item}</NavLink></li>;
                                }
                                else
                                {
                                    return (<Cover key={i}>
                                        <li className={classes.item}><NavLink activeClassName={classes.active} to={dic[item]} exact>{item}</NavLink></li>
                                        <div className={classes.separator}></div>
                                    </Cover>)
                                }
                            })}
                        </ul>);
        item=(<li className={classes.item}>
            <span onClick={props.clicked}>{props.name}<span>{props.show && !props.hoverable?<i className="fas fa-angle-up"></i>:<i className="fas fa-angle-down"></i>}</span></span>
            {props.show?dropDown:null}
          </li>)
    }     
    return item;
}
export default NavigationItem;