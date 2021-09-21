import React from 'react';
import { Container } from 'react-bootstrap';

const PageLayout = (props) => (
    <Container className="my-5">
       <div className="border-radius box-shadow">
         {props.children}
       </div>
    </Container>

);

export default PageLayout;
