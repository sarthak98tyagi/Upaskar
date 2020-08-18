import React from 'react';
import classes from './Contact.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContactCard from './../ContactCard/ContactCard';
const Contact = props =>
{
    return (<main className={classes.contact}>
        <Container fluid >
            <Row className={classes.row}>
                <Col  lg="4"><ContactCard name="Address" icon="fas fa-map-marker-alt" data="House No. 11/5529 Sangam Vihar Colony, 
                Khata Kheri Saharanpur, SANGAM VIHAR COLONY, Saharanpur-247001, Uttar Pradesh, India"></ContactCard></Col>
                <Col lg="4"><ContactCard name="Phone" icon="fab fa-whatsapp" data="+91 9599115926"></ContactCard></Col>
                <Col lg="4"><ContactCard name="Mail" icon="fas fa-envelope" data="upaskarcreations@gmail.com"></ContactCard></Col>
                
            </Row>
        </Container>
        </main>)
}
export default Contact;