import React from 'react';

import Search from '../../components/Search';
import Footer from '../../components/Footer';

const CountryPage = () => {
     return (
          <div className="container text-center">
               <h1 className="display-4">Covid-19 Tracker</h1>
               <div>
                    <Search />
                    <hr/>
               </div>
               <hr/>
               <div>
                    <Footer />
               </div>
          </div>
     )
};

export default CountryPage;
