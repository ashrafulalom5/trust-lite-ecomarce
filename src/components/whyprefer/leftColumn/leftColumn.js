import React from 'react';
import {
  Accordion,
  AccordionItem,

  AccordionItemButton, AccordionItemHeading,

  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from './data';


const renderAccordion = (data, index) => {
    return(
      <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {data.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                {data.desc}
                </AccordionItemPanel>
      </AccordionItem>
    )
 
}

const leftColumn = () => <div className="left_column">
        <Accordion>
        {data.map(renderAccordion)}
        </Accordion>
    





   

    {/* <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    Directly from the Producer <i class="fas fa-angle-down rotate-icon"></i>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Order directly from the Producer, artisan or farmers and get your order delivered straight to your home</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Personalised Menus , Efficient &Hygienic Process
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>The curated meal choice and individual ordering is just fantastic! Always something for everyone on the menus. We insist that all our partners use state of the art processing facilities and world class practises and highly skilled employees to ensure your every order is packed just right and delivered fresh to your home.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    End-to-End Service
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>With a dedicated account manager our team is on hand to ensure everything runs smoothly. Reach us real time via phone, chat  or email and trust there\'s a real person who knows your needs on the other end . We want to make healthy, delicious food accessible in people\'s daily lives by connecting them with Bangladesh’s most innovative and quality focused, locally produced products and Homemade ready meals.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    From Farm to Fork
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>The TrustLite  producers stand for a new, digital generation of farmers, butchers, fishermen, rural women and artisans who love what they do. They fight for a modern agriculture and food economy and respect nature. They advocate old varieties, special breeds and diversity that simply tastes good.
        'Order directly from the producer you trust.
        'Support real craft with every order.
        'Taste the variety of honest foods.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
    Happiness served & Delivered Fresh 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Good food is as much the experience as it is the taste. Bring your team together over a meal that will give them energy throughout the day and make soggy sandwiches, pasta and post lunch lulls a thing of the past. The freshest and healthiest products, cleaned, cut and delivered straight to your kitchen, on time , every time.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
    Right Price and Fastest Home Delivery
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body>TrustLite guarantees right price and fastest home delivery service than others to any destination across divisional city. Because of
            'We are convenience with confidence
            'We are simplicity, We are hope
            'We are the eco of a new era
            'We are the end of queues.
            'To simplify your life we exist and to ensure your comfort we work.
            'With one click choose and buy without delay anywhere and anytime 
            'Then relax and rest while the purchase at your door is delivered.
            'Yes it's true. 
            </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="6">
    Money Back Guarantee
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="6">
      <Card.Body>Satisfied with your purchase or products on TrustLite? Leave a positive comment. Not satisfied? Report the problem, our customer service is ready to solve the problem. Otherwise you will be refunded and Money back guarantee.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}



</div>



export default leftColumn;
