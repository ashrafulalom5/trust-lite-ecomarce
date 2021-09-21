import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HowImage from '../../asset/image/howitworks.jpg';
import classes from './howItWorks.module.css';

const howItWorks = () => (
    <div className={classes.bgwhite}>
        <div className="textHeadingBg">
            <h2 className="categoryTitle">How it Works?</h2>
        </div>
        <Container className="py-5">
            <Row lg={1} md={1} sm={1} xs={1}>
                <div className="hide">
                    {/* <Col>
                    <h3><span style={{color:'#993300'}}><strong><span style={{backgroundColor:'#ffffff'}}>&ldquo; TrustLite &ldquo; is your one stop digital supermarket. It selects for you the best quality locally produced products,
                        ready to cook and homemade ready meals to do the shopping as in the countryside.</span></strong></span></h3>

                    <h2 style={{textAlign:'center'}}><br /><span style={{textDecoration:'underline',color:'#2e6e2e'}}>Customer Process </span></h2>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#2e6e2e'}}>1.Register for free</span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#2e6e2e'}}> Enter your phone number, email and password, then specify the city &amp; select your nearest service point in which you want to receive the shopping. It only takes a few seconds to enter the large online supermarket in TrusLite.</span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#2e6e2e'}}>2.Select the products that you prefer </span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#2e6e2e'}}>
                        Search for the locally produced products or Browse the products market  categories then compose your cart. You can also choose from fresh seasonal  fruit ,  vegetables, dairy items, eggs, meats,  fresh fish, pasta, homemade ready meals ,ready to cook product, combo  packs, flour ,rice, wholesale zone  and much more daily needs product.</span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#2e6e2e'}}>3.Check the available offer</span></h2>
                    <h2 style={{textAlign:'left'}}><span style={{color:'#2e6e2e'}}>4.Select the day and time of delivery </span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#2e6e2e'}}>
                      You shop online, we take it home. You just have to tell us what day and time slot you prefer to receive it. The evening before delivery we will send you an email or phone with the estimated time of arrival within the range of your choice, so that you can arrange for the collection..
                        </span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#2e6e2e'}}>5.Place the order</span></h2>
                    <h2 style={{textAlign:'left'}}><span style={{color:'#2e6e2e'}}>6.Payment securely and success  </span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#2e6e2e'}}>
                       You can pay for your shopping by Mobile banking, credit or debit card. Alternatively, you can use the COD payment system.
                        </span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h3 style={{textAlign:'center',paddingLeft:'40px'}}>
                        <span style={{textDecoration:'underline'}}><strong><span style={{textDecoration:'underline',color:'#800000'}}>Admin Process </span>
                        </strong></span></h3>
                    <ul>
                        <li style={{textAlign:'left'}}><strong><span style={{color:'#800000'}}> <h3>New order notification</h3> </span></strong></li>
                        <li style={{textAlign:'left'}}><strong><span style={{color:'#800000'}}> <h3>View order details </h3> </span></strong></li>
                        <li style={{textAlign:'left'}}><strong><span style={{color:'#800000'}}> <h3>Verify stock </h3> </span></strong></li>
                        <li style={{textAlign:'left'}}><strong><span style={{color:'#800000'}}> <h3>Otherwise collect from our verified local producer </h3> </span></strong></li>
                        <li style={{textAlign:'left'}}><strong><span style={{color:'#800000'}}> <h3>To Ensure checking quality </h3> </span></strong></li>
                        <li style={{textAlign:'left'}}><strong><span style={{color:'#800000'}}> <h3>Then ready for delivery & complete packaging </h3> </span></strong></li>
                    </ul>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'center'}}><br /><span style={{textDecoration:'underline',color:'#0e51b7'}}>Delivery Process  </span></h2>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>1.View delivery location </span></h2>
                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>2.Goods delivered  </span></h2>
                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>3.Receive your shopping  </span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#0e51b7'}}> He Shopping arrives at your home on the day and time slot you have indicated.
                        All you have to do is open the package and enjoy the delights of our one stop digital supermarket.</span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>4.Fast & reliable   </span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#0e51b7'}}> We are able to deliver the shopping even in less than 24 hours from the moment of the order,   depending on the destination.
                        If you are not available, you can ask us to leave the shopping at the   door: we will deliver even in your absence!</span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>5.Money back guarantee  </span></h2>
                    <p style={{paddingLeft:'40px'}}><span style={{color:'#0e51b7'}}> Satisfied with your purchase on TrustLite ? Leave a positive comment.
                        Not satisfied? Report the problem, our customer service is always listening to you and ready to solve the problem.</span></p>
                    <p style={{paddingLeft:'40px',textAlign:'left'}}>&nbsp;</p>
                    <p>&nbsp;</p>

                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>6 . Happy customer   </span></h2>
                    <h2 style={{textAlign:'left'}}><span style={{color:'#0e51b7'}}>7 . Order close   </span></h2>

                </Col> */}
                </div>
                <img src={HowImage} alt="How Trust Lite works"/>
            </Row>
        </Container>
    </div>
);

export default howItWorks;
