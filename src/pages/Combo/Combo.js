import React from 'react';
import GlobalFooter from '../../components/global/globalFooter';
import GlobalHeader from '../../components/global/globalHeader';
import ComboHeader from '../../components/header/ComboHeader/comboHeader';
// import MarketHeader from '../../components/header/MarketCategoryHeader/marketHeader';
import Combo from '../../components/MarketCategory/Combo';

const ComboPage = () => (
    <div>
        <GlobalHeader title="Combo Packs" />
            <ComboHeader/>
                <Combo />
        <GlobalFooter />
    </div>
);

export default ComboPage;
