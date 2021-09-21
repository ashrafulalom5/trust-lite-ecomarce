import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import HomemadeHeader from '../../components/header/HomemadeHeader/HomemadeHeader';
import Homemade from '../../components/MarketCategory/Homemade';

const HomaeMadePage = () => (
    <div>
        <GlobalHeader title="Home Made Ready Meals" />
        <HomemadeHeader/>
        <Homemade />
        <GlobalFooter />
    </div>
);

export default HomaeMadePage;
