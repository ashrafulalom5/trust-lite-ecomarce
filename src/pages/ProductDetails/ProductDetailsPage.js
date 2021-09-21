import React, { Component } from 'react';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import ProductInformation from '../../components/producerInformation/producerInformation';
import ProductDetails from '../../components/productDetails/productDetails';
import PageLayout from '../../hoc/pagelayout';

class ProductDetailsPage extends Component {
    render() {
        return (
           <>
               <GlobalHeader title="Product View Details" />
                <PageLayout>
                    <div className="bg-white ">
                        <ProductDetails/>
                        <ProductInformation/>
                    </div>
                </PageLayout>
               <GlobalFooter />
           </>

        );
    }
}

export default ProductDetailsPage;