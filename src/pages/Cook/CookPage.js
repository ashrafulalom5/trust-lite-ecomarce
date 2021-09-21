import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import CookHeader from '../../components/header/CookHeader/CookHeader';
import ReadyMeals from '../../components/MarketCategory/Cook';

const CookPage = () => (
    <div>
        <GlobalHeader title="Ready To Cook Products" />
        <CookHeader/>
        <ReadyMeals />
        <GlobalFooter />
    </div>
);

export default CookPage;
