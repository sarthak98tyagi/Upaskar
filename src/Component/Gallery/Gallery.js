import React from 'react';
import classes from './Gallery.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import Card from './../Card/Card';
const Gallery = (props) =>
{
    return(
        <Container fluid className={classes.galleryCover}>
            <div className={classes.title}>{props.name}</div>   
            <Row className={classes.row}>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
            </Row>
        </Container>
    )
}
export default Gallery;