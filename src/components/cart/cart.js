import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Amount from './amount/amount';
import Handbag from './handbag/handbag';
//classes.cart_page
class cart extends Component {
    render() {
        return (
            <Container>
                        <div className="bg-white row pt-3 pb-5">
                            <Handbag />
                            <Amount />
                        </div>
            </Container>


        );
    }
}

export default cart;
