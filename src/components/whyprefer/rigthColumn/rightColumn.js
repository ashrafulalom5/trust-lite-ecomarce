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

const rightColumn = () => <div className="left_column">
        <Accordion>
        {data.map(renderAccordion)}
        </Accordion>




     {/* <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    Packaged Sustainably & Safety Certified
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>The products are freshly packaged on the farms using sustainable packaging made from recycled raw materials and sent directly to you. That too by the top lab in Bangladesh! Like premium Chicken certified to be free of antibiotic-reduce . And fresh Fish , certified to be free of harmful chemicals.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Locally Produced Products
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>With the motto “prevention is better than cure" at heart TrustLite is ensuring locally produced organic ,natural products ready to cook items and Homemade ready meals by our specialized chefs from marginal farmers ,small manufacturer and entrepreneurs</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    Reliable, Safe and Healthy
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>We will sell only the product that we would eat ourselves. Every single product is handpicked by a team with years of experience. If it\'s not fresh and local , we won\'t sell it. We always try to ensure healthy foods and locally produced products Even we are hardly maintenance safe and hygienic.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    Save Time and Money
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>A complete one stop  digital supermarket at your door. Specially we provide clean-up washed , chopping, ready to cook, homemade ready meals and customized domestic solutions to the working professional who can\'t meet up due to work and timing challenges.  TrustLite is more cost effective than other most other platforms.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
    100% High Quality Food
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>A complete one stop  digital supermarket at your door. Specially we provide clean-up washed , chopping, ready to cook, homemade ready meals and customized domestic solutions to the working professional who can\'t meet up due to work and timing challenges.  TrustLite is more cost effective than other most other platforms.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
    Sustainable Practice & Choice Aplenty
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body>The food was hot ,flavour was delicious and packaging was not excessively. We offer a wide of variety of fresh , chemical free fish and seafood, premium meats, delicious ready to cook dishes and much more. And we are always adding more products to our range. So you will find something new to try ,almost every other day.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="6">
    Transparency and Integrity
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="6">
      <Card.Body>We will charge only for what you buy. Doesn\'t everyone do this? Not really.  Most other places first weight the meat or fish then cut up the pieces and throw out the parts which aren\'t fit to eat , such as offal, gizzard, wingtips etc. But you still pay based on the orginal  weight even though what you finally get is 10% to 30% less. At TrustLite 1 kg you will get exactly 1 kg. And that meat or fish will be only the best bits more meat and less bones. So if we look like we cost a little more than others. Thanks for reading. Now you know what we have set out to do and how we are doing it. If you find us slipping, haul us up .We will set it right and ensure that all is happy again. That\'s the TrustLite promise.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}




</div>;

export default rightColumn;
