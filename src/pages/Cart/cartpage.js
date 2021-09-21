import React from 'react';
import Cart from '../../components/cart/cart';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import PageLayout from '../../hoc/pagelayout';

const checkoutpage = () => (
    <div>
        <GlobalHeader title="Shopping Handbag Products" />
            <PageLayout>
                <Cart />
            </PageLayout>
            
        <GlobalFooter />
    </div>
);

export default checkoutpage;
