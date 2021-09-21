import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import WholeHeader from '../../components/header/WholsaleHeader/wholeHeader';
import Wholesale from '../../components/MarketCategory/Whole';

const WholeSalePage = () => (
    <div>
        <GlobalHeader title="Whole Sale Zone" />
        <WholeHeader/>
        <Wholesale />
        <GlobalFooter />
    </div>
);

export default WholeSalePage;
