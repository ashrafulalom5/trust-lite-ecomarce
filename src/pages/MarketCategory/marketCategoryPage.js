import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import MarketHeader from '../../components/header/MarketCategoryHeader/marketHeader';
import MarketCategory from '../../components/MarketCategory/marketCategory';

const marketCategoryPage = () => (
    <div>
        <GlobalHeader title="Product Markets" />
        <MarketHeader />
        <MarketCategory />
        <GlobalFooter />
    </div>
);

export default marketCategoryPage;
