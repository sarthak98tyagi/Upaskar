import React from 'react';
import classes from './Gallery.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import Card from './../Card/Card';
const Gallery = (props) =>
{
    let items=null;
    if(props.list)
    {
        items=props.list.map((s,i)=>{
            return <Col sm="6" lg="4" key={i}><Card src={s}/></Col>
        });
    }
    
    return(
        <Container fluid className={classes.galleryCover}>
            <div className={classes.title}>{props.name}</div>   
            <Row className={classes.row}>
                {items}
                {/* <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col> */}
            </Row>
            <div className={classes.gap}/>
            {props.children}
        </Container>
    )
}
export default Gallery;