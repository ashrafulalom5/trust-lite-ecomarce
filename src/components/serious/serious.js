import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import classes from './serious.module.css';
import Slogan from './slogan/slogan';

const serious = () => (
    <div className={classes.serious}>
        <Container className={classes.serious_container}>
            <h2 className="serious_heading">We save your serious</h2>
            <div className={classes.changetext}>
                <Slogan />
            </div>
            <Link className="btn btn-primary tt-up" to="/category/homemade-ready-meals">View Our Plans</Link>
        </Container>
    </div>
);

serious.propTypes = {};

export default serious;
