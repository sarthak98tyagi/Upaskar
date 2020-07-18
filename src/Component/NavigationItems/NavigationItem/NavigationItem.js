import React from 'react';
import classes from './NavigationItem.module.css';
import Cover from './../../../Hoc/Cover';
const NavigationItem = (props) =>
{
    let drop=null;
    let arr=[];
    let item=<li className={classes.item}><a href='/'>{props.name}</a></li>;
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
                                    return <li className={classes.item} key={i}><a href="/">{item}</a></li>;
                                }
                                else
                                {
                                    return (<Cover key={i}>
                                        <li className={classes.item}><a href="/">{item}</a></li>
                                        <div className={classes.separator}></div>
                                    </Cover>)
                                }
                            })}
                        </ul>);
        item=(<li className={classes.item} onClick={props.clicked}>
            <span>{props.name}<span>{props.show && !props.hoverable?<i className="fas fa-angle-up"></i>:<i className="fas fa-angle-down"></i>}</span></span>
            {props.show?dropDown:null}
          </li>)
    }     
    return item;
}
export default NavigationItem;