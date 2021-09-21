import React, {Component,Fragment} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './categoryMenu.module.css';
import { ToastContainer, toast } from 'react-toastify';

class categoryMenu extends Component {
    constructor() {
        super();
        this.state={

        }
    }
    render() {
        return (
            <Fragment>
                <div className={classes.categoryMenu}>
                    <Navbar expand="md" className={classes.menuNavbar}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                                <Link className="nav-link" to={"/category/product-market"}>
                                    Product Markets
                                </Link>
                                <Link className="nav-link" to={"/category/homemade-ready-meals"}>
                                    Homemade Ready Meals
                                </Link>
                                <Link className="nav-link" to={"/category/ready-to-cook-product"}>
                                    Ready to Cook Product
                                </Link>
                                <Link className="nav-link" to={"/category/combo-packs"}>
                                    Combo Packs
                                </Link>
                                <Link className="nav-link" to={"/category/wholesale-zone"}>
                                    Wholesale Zone
                                </Link>
                                <Link className="nav-link" to="/partner">
                                    Become a Partner
                                </Link>

                                <Link className="nav-link" to="/buy/earn">
                                    Buy &amp; Earn Opportunity
                                </Link>
                                <Link className="nav-link" to="/servicepoint/location">
                                    Find various service point
                                </Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </Fragment>
        );
    }
}


export default categoryMenu;
