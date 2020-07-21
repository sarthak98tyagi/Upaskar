import React from 'react';
import classes from './Gallery.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import Card from './../Card/Card';
const Gallery = (props) =>
{
    return(
        <Container fluid className={classes.galleryCover}>
            <Row className={classes.row}>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
                <Col sm="6" lg="4"><Card/></Col>
            </Row>
            <div className={classes.title}>Title</div>   
        </Container>
    )
}
export default Gallery;