import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './topbar.module.css';

const topbar = () => (
    <div className={classes.topbar}>
        <Container>
            <Row lg={2} md={1} sm={1} xs={1}>
                <Col>
                    <div className={classes.left}>
                        <a to="#top">+8801790493968</a>
                        <a to="#top">contact@kamalhossan.com</a>
                    </div>
                </Col>
                <Col>
                    <div className={classes.right}>
                        <Link className={classes.link} to="/shop">
                            All Products
                        </Link>
                        <Link className={classes.link} to="/myaccount">
                            My Account
                        </Link>
                        <Link className={classes.link} to="/partner">
                            Become Partner
                        </Link>

                        <Link className={classes.link} to="/login">
                            Login or Signup
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default topbar;
