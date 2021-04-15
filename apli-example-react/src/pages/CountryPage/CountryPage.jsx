import React, {useState, useEffect} from 'react';

import Search from '../../components/Search';
import Footer from '../../components/Footer';
import CardItem from './components/CountryCard';

const CountryPage = () => {

     const [casos, setCasos] = useState([]);

     useEffect(() => {
          getData()
     }, []);

     const getData = async () => {
          const data = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
          const response = await data.json()
          setCasos(response)
     }

     return (
          <div className="container text-center">
               <h1 className="display-4">Covid-19 Tracker</h1>
               <div>
                    <Search />
                    <hr/>
                    <div className="card-columns">
                         {
                              casos.map((item, index) =>
                                   <CardItem key={index} item={item} />
                              )
                         }
                    </div>
               </div>
               <hr/>
               <div>
                    <Footer />
               </div>
          </div>
     )
};

export default CountryPage;
