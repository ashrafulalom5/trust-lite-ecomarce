import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import BuyEarnSection from "../../src/pages/BuyEarn/BuyEarn";
import CartPage from '../../src/pages/Cart/cartpage';
import Account from "../pages/Account/Account";
import OrderHistory from "../pages/Account/Customer/OrderHistory";
import PaymentHistory from "../pages/Account/Customer/PaymentHistory";
import UserNotification from '../pages/Account/Notification';
import OrderDetails from "../pages/Account/OrderDetails";
import OrderTrackingPage from "../pages/Account/OrderTrackingPage";
import PaymentCreate from "../pages/Account/Spm/PaymentCreate";
import PaymentManementList from "../pages/Account/Spm/PaymentManementList";
import PaymentUpdate from "../pages/Account/Spm/PaymentUpdate";
import SpmOrderHistory from "../pages/Account/Spm/SpmOrderHistory";
import UserProfile from "../pages/Account/UserProfile";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
import CheckOutPage from "../pages/CheckOut/CheckOutPage";
import ComboPage from "../pages/Combo/Combo";
import Blog from "../pages/CompanyUrl/Blog";
import BuyEarnOpportonity from "../pages/CompanyUrl/BuyEarnOpportonity";
import GuideLine from "../pages/CompanyUrl/GuideLine";
import Overview from "../pages/CompanyUrl/Overview";
import PrivacyPolicay from "../pages/CompanyUrl/PrivacyPolicay";
import RefundPolicy from "../pages/CompanyUrl/RefundPolicy";
import SingleBlog from '../pages/CompanyUrl/SingleBlog';
import TermsCondition from "../pages/CompanyUrl/TermsCondition";
import CookPage from "../pages/Cook/CookPage";
import Forgot from "../pages/ForgotPassword/Forgot";
import Home from "../pages/Home/Home";
import HomaeMadePage from "../pages/Homemade/Homemade";
import Login from "../pages/Login/Login";
import MarketCategory from '../pages/MarketCategory/marketCategoryPage';
import NotFound from "../pages/NotFound";
import Partner from "../pages/Partner/Partner";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import Register from "../pages/Register/Register";
import SearchProducts from "../pages/search/Search";
import SpmLocation from "../pages/SpmLocation/SpmLocation";
import TeamPage from '../pages/Team/Teampage';
import WholeSalePage from "../pages/Whole/Wholesale";


class Router extends Component {
    render() {
        return (
            <Fragment>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/category/product-market" component={MarketCategory} />
                  <Route exact path="/category/homemade-ready-meals" component={HomaeMadePage} />
                  <Route exact path="/category/ready-to-cook-product" component={CookPage} />
                  <Route exact path="/category/combo-packs" component={ComboPage} />
                  <Route exact path="/category/wholesale-zone" component={WholeSalePage} />
                  <Route exact path="/category/products/:name" component={CategoryProducts} />
                  <Route exact path="/product/view/:name" component={ProductDetailsPage} />
                  <Route exact path="/seacrh/product/:name" component={SearchProducts} />
                  <Route exact path="/cart" component={CartPage} />

                  <Route exact path="/privacy-policy" component={PrivacyPolicay} />
                  <Route exact path="/terms-condition" component={TermsCondition} />
                  <Route exact path="/overview" component={Overview} />
                  <Route exact path="/refund-policy" component={RefundPolicy} />
                  <Route exact path="/guideline" component={GuideLine} />
                  <Route exact path="/latest/blog" component={Blog} />
                  <Route exact path="/blog/single/:id" component={SingleBlog} />
                  <Route exact path="/servicepoint/location" component={SpmLocation} />
                  <Route exact path="/buy/earn" component={BuyEarnOpportonity} />
                  <Route exact path="/our/team" component={TeamPage} />

                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/partner" component={Partner} />
                  <Route exact path="/forgot" component={Forgot} />
                  <Route exact path="/dashboard" component={Account} />
                  <Route exact path="/user/profile" component={UserProfile} />
                  <Route exact path="/notification" component={UserNotification} />
                  <Route exact path="/referral" component={BuyEarnSection} />
                  <Route exact path="/checkout" component={CheckOutPage} />
                  <Route exact path="/customer/order-history" component={OrderHistory} />
                  <Route exact path="/payments" component={PaymentHistory} />
                  <Route exact path="/spm/order-history" component={SpmOrderHistory} />
                  <Route exact path="/order-history/details/:invoice" component={OrderDetails} />
                  <Route exact path="/order-tracking" component={OrderTrackingPage} />

                  <Route exact path="/spm/payment" component={PaymentManementList} />
                  <Route exact path="/spm/payment/create" component={PaymentCreate} />
                  <Route exact path="/spm/payment/edit/:id" component={PaymentUpdate} />

                  <Route component={NotFound}/>
              </Switch>
            </Fragment>
        );
    }
}

export default Router;