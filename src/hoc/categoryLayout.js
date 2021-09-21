import React from 'react';
import { Container, Row } from 'react-bootstrap';

const CategoryLayout = (props) => (
    <Container className="my-5">
        <Row>
          {props.children}
       </Row>
    </Container>
);



export default CategoryLayout;
