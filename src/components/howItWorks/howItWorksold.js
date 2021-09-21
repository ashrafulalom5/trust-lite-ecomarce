import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from './data';
import classes from './howItWorks.module.css';

const items = data.map((rv) => (
    <Col>
        <div className="shadow-sm p-3 mb-5 bg-white rounded text-center">
            <img className={classes.serviceImage} src={rv.image} alt={rv.clientName} />
            <h4 className={classes.title}>{rv.clientName}</h4>
            <p>{rv.desc}</p>
        </div>
    </Col>
));

const howItWorks = () => (
    <Container className="pb-5">
        <Row lg={3} md={3} sm={2} xs={2}>
            {items}
        </Row>
    </Container>
);

export default howItWorks;
