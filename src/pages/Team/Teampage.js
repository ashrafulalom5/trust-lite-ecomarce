import React, { Component } from 'react';
import GlobalFooter from "../../components/global/globalFooter";
import GlobalHeader from "../../components/global/globalHeader";
import Team from '../../components/team/team';
import PageLayout from '../../hoc/pagelayout';

class TeamPage extends Component {
    render() {
        return (
           <>
               <GlobalHeader title="Product View Details" />
                  <PageLayout>
                    <div className="bg-white">
                    <h2 className="text-dark text-center py-3 bg-light"> Meet Our Team </h2>
                      <Team/>
                    </div>
                  </PageLayout>
               <GlobalFooter />
           </>

        );
    }
}

export default TeamPage;